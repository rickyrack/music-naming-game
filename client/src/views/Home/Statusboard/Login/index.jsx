import React, { useState } from "react";
import "./styles.scss";
import Button1 from "../../../../components/Button";
import { useAuth } from "../../../../store/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await login(username, password);
    if (username.length === 0) setErrorMsg("What's your username?");
    else if (password.length === 0) setErrorMsg("What's your password?");
    else if (!loginSuccess) setErrorMsg("Username or Password incorrect.");
  };

  return (
    <div className="login">
      <form id="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button1 type="submit" text="Submit" />
      </form>
      <Link to='/'>Forgot Username/Password?</Link>
      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
}

export default Login;
