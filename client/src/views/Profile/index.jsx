import React, { useEffect, useState } from "react";
import "./style.module.scss";
import axios from "axios";
import { api } from "../../services/api";

function Profile() {
  //const { userData } = 

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const token = 'test';
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

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Username Here</h2>
    </div>
  );
}

export default Profile;
