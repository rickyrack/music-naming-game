import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { api } from "../../services/api";
import Button1 from "../../components/Button";
import { useAuth } from "../../store/AuthContext";
import leftArrow from "../../assets/images/Left Arrow.png";
import rightArrow from "../../assets/images/Right Arrow.png";
import Avatar from "../../components/Avatar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState({});
  const [avatarData, setAvatarData] = useState({
    history: [],
    index: 0,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/user/${user.uid}`);
        setUserData(res.data);
        setAvatarData({
          ...avatarData,
          seed: res.data.avatarId,
          history: [res.data.avatarId],
        });
      } catch (error) {
        console.log(`Error: ${error.message}`);
        useNavigate("/");
      }
    };

    fetchUser();
  }, []);

  const logoutUser = async () => {
    await logout();
  };

  const saveAvatar = async () => {
    try {
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
    await api.put(`/user/${user.uid}/settings`, {
      avatarId: avatarData.history[avatarData.index]
    });
  };

  const nextAvatar = () => {
    if (avatarData.history.length - 1 === avatarData.index) {
      const newAvatar = Math.floor(Math.random() * 1000) + 1;
      setAvatarData((prev) => ({
        history: [...prev.history, newAvatar],
        index: prev.index + 1,
      }));
    } else if (avatarData.history.length - 1 > avatarData.index) {
      setAvatarData((prev) => ({
        ...prev,
        index: prev.index + 1,
      }));
    }
  };

  const lastAvatar = () => {
    console.log("last");
    if (avatarData.history.length - 1 === 0 || avatarData.index === 0) return;
    setAvatarData((prev) => ({
      ...prev,
      index: prev.index - 1,
    }));
  };

  return (
    <div className="profile">
      <h1>{userData.username}</h1>
      <div className="settings">
        <Button1 text="Change Username" />
        <div className="avatarSelect">
          <div className="selector">
            <button className="selectButton" onClick={lastAvatar}>
              <img src={leftArrow} alt="Back" />
            </button>
            <Avatar size="5rem" seed={avatarData.history[avatarData.index]} />
            <button className="selectButton" onClick={nextAvatar}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
          <Button1 className="avatarSave" text="Save" onClick={saveAvatar} />
        </div>
      </div>
      <Button1 className="profileLogout" text="Logout" onClick={logoutUser} />
    </div>
  );
}

export default Profile;
