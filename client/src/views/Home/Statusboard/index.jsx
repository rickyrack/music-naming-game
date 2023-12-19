import React, { useRef, useState } from "react";
import "./style.scss";
import Login from "./Login";

function Statusboard({ onlinePlayers }) {
  const [loggedIn, setLoggedIn] = useState(false);

  let LoginForm = <Login />;

  if (loggedIn) LoginForm = <></>;

    return (
      <div className={loggedIn ? 'statusboard smallBoard' : 'statusboard'}>
        <p>Players Online:<br />26</p>
        {LoginForm}
      </div>
    );
}

export default Statusboard;
