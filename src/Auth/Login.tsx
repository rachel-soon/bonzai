import React, { useState } from "react";
import "./Login.scss";
import { useAuth } from "../hooks/useAuth";

function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (auth) await auth.login(email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-content">
        <p className="title is-3 mb-3 pt-5 pl-5">Sign In</p>

        <div className="content">
          <div className="control has-icons-left">
            <span className="icon is-left">
              <i className="fas fa-circle-user"></i>
            </span>
            <input
              className="input is-rounded"
              type="text"
              placeholder="Email"
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
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`button is-link is-rounded mt-4 mb-4 is-medium ${
              isLoading && "is-loading"
            }`}
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}

export default AuthLogin;
