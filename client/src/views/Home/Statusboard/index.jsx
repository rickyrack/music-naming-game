import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Login from "./Login";
import { useAuth } from "../../../store/AuthContext";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

function Statusboard({ onlinePlayers }) {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        if (user) {
          const res = await api.get(`/user/${user.uid}`);

          if (isMounted) {
            setUserData(res.data)
          }
        };
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    }
  }, [user]);

  return (
    <div className={userData ? "statusboard smallBoard" : "statusboard"}>
      <p>
        Players Online:
        <br />
        26
      </p>
      {userData ? <p className="userText">{userData}</p> : <Login />}
    </div>
  );
}

export default Statusboard;
