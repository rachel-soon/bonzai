import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function Register() {
  // TODO: instead of using useState, you could probably use the useReducer stuff
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === confirmPassword) {
      const registerSuccessful = await auth!.register(email, password);
      if (registerSuccessful) {
        navigate("/login");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <form className="card" onSubmit={registerUser}>
        <div className="card-content">
          <p className="title is-3 mb-3 pt-5 pl-5">Register</p>

          <div className="content">
            <div className="control has-icons-left">
              <span className="icon is-left">
                <i className="fas fa-circle-user"></i>
              </span>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="control has-icons-left">
              <span className="icon is-left">
                <i className="fas fa-lock"></i>
              </span>
              <input
                className="input is-rounded"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="control has-icons-left">
              <span className="icon is-left">
                <i className="fas fa-lock"></i>
              </span>
              <input
                className="input is-rounded"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="is-size-7">
              Already have an account?{" "}
              <NavLink to="/login" className="create-account-link">
                Sign in instead
              </NavLink>
            </div>

            <button
              type="submit"
              className={`button is-link is-rounded mt-4 mb-4 is-medium ${
                isLoading && "is-loading"
              }`}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
