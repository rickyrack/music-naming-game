import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { api } from "../../services/api";
import Button1 from "../../components/Button";
import { useAuth } from "../../store/AuthContext";

function Profile() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get(`/user/${user.uid}`);
      setUserData(res.data);
    }
  
    fetchUser();
  }, [])
  

  const logoutUser = async () => {
    await logout();
  };

  return (
    <div className="profile">
      <h1>{userData.username}</h1>
      <div className="settings">
        <Button1 text="Change Username" />
        <div className="avatarSelect">
          <button>{'<'}</button>
          <div className="pfpContainer">
            <img className="pfp" src="https://api.dicebear.com/7.x/bottts/svg" alt="avatar" />
          </div>
          <button>{'>'}</button>
        </div>
        
      </div>
      <Button1 className="profileLogout" text="Logout" onClick={logoutUser} />
    </div>
  );
}

export default Profile;
