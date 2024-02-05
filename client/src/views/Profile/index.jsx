import React, { useEffect, useState } from "react";
import "./style.module.scss";
import axios from "axios";
import { api } from "../../services/api";
import Button1 from "../../components/Button";
import { useAuth } from "../../store/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            console.log(user)
            const res = await api.get(`/user:${user.username}`, {
              headers: {
                authorization: `Bearer ${token}`,
              },
            });
            console.log(res);
          } catch (error) {
            console.log(error.message);
          }
    }
    //fetchUserData();
  }, []);

  const logoutUser = async () => {
    await logout();
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Username Here</h2>
      <Button1 text='Logout' onClick={logoutUser}/>
    </div>
  );
}

export default Profile;
