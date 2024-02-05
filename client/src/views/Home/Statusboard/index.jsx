import React, { useEffect, useRef, useState } from "react";
import "./style.module.scss";
import Login from "./Login";
import { useAuth } from "../../../store/AuthContext";
import { api } from "../../../services/api";

function Statusboard({ onlinePlayers }) {
  const { user } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get(`/user/${user.uid}`);
      setUserData(res);
    }

    fetchUser();
  }, [])


  let LoginForm = user ? <p>{userData.data}</p>: <Login />;

    return (
      <div className={user ? 'statusboard smallBoard' : 'statusboard'}>
        <p>Players Online:<br />26</p>
        {LoginForm}
      </div>
    );
}

export default Statusboard;
