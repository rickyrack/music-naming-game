import React, { useRef, useState } from "react";
import "./style.scss";
import Login from "./Login";
import { useAuth } from "../../../store/AuthContext";

function Statusboard({ onlinePlayers }) {
  const { user } = useAuth();
  let LoginForm = user ?  <p>{user}</p>: <Login />;

    return (
      <div className={user ? 'statusboard smallBoard' : 'statusboard'}>
        <p>Players Online:<br />26</p>
        {LoginForm}
      </div>
    );
}

export default Statusboard;
