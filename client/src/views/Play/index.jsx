import React, { useEffect, useState } from 'react'
import "./styles.scss";
import Practice from "./Practice";
import Online from './Online';
import { useLocation, useNavigate } from 'react-router-dom';

function Play() {
  const location = useLocation();
  const navigate = useNavigate();
  let display = <h1>Loading...</h1>

  useEffect(() => {
    // if play page was visited improperly, go to home
    if (!location.state?.online) return navigate('/');

    if (location.state.online) display = <Online />;
    else display = <Practice />
  }, [])


  return (
    {display}
  )
}

export default Play