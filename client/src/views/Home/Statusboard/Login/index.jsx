import React, { useState } from "react";
import { api } from "../../../../services/api";
import './style.module.scss';
import Button1 from "../../../../components/Button";
import { useAuth } from "../../../../store/AuthContext";

function Login() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginData = await login(username, password);
            const res = await api.post('/user/login', {
                username,
                password
            });

            console.log(res);
        } catch (err) {
            
        }
    }

  return (
    <div className="login">
      <form id="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button1 type="submit" text="Submit" />
      </form>
    </div>
  );
}

export default Login;
