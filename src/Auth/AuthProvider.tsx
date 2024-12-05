import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase-config";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
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
      navigate("/"); // TODO: hmmm
    } else {
      localStorage.removeItem("site");
    }
  }, [token, navigate]);

  const register = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);

      if ("accessToken" in response.user && response.user.accessToken) {
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

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
    <AuthContext.Provider value={{ token, user, login, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
