import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../hooks/useAuth";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("site") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("site", token);
      navigate("/dashboard");
    } else {
      localStorage.removeItem("site");
      navigate("/login");
    }
  }, [token, navigate]);

  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response.user && "accessToken" in response.user) {
        setToken(String(response.user.accessToken)); // TODO: change this to react store
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logOut = async () => {
    setUser(null);
    setToken("");
    navigate("/login");
    await signOut(auth);
  };

  // Note: this is made to wrap around the application
  // We can pass down the context to the children that is within the AuthContext
  return (
    <AuthContext.Provider value={{ token, user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
