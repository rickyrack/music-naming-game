import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import Login from "./Login";
import { useAuth } from "../../../store/AuthContext";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar";

function Statusboard({ onlinePlayers }) {
  const { user, loading } = useAuth();
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        if (user) {
          const res = await api.get(`/user/${user.uid}`);

          if (isMounted) {
            setUserdata(res.data);
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
          <Avatar size="5rem" seed={userData.avatarId} />
          <p className="username">{userData.username}</p>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Statusboard;
