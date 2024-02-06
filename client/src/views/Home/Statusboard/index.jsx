import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import Login from "./Login";
import { useAuth } from "../../../store/AuthContext";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

function Statusboard({ onlinePlayers }) {
  const { user, loading } = useAuth();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        if (user) {
          const res = await api.get(`/user/${user.uid}`);

          if (isMounted) {
            setUsername(res.data.username);
          }
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, [user]);

  return (
    <div className={user ? "statusboard smallBoard" : "statusboard"}>
      <p>
        Players Online:
        <br />
        26
      </p>
      {user ? (
        <>
          <div className="pfpContainer">
            <img className="pfp" src="https://api.dicebear.com/7.x/bottts/svg" alt="avatar" />
          </div>
          <p className="username">{username}</p>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Statusboard;
