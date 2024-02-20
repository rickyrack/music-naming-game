import React, { useEffect, useState } from 'react'
import "./styles.scss";
import Practice from "./Practice";
import Online from './Online';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import Cookies from 'js-cookie';

function Play() {
  const location = useLocation();
  const navigate = useNavigate();
  const [matchType, setMatchType] = useState('');
  let display = 
  matchType === 'practice'
  ? <Practice />
  : matchType === 'online'
  ? <Online />
  : <h1>Loading...</h1>

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const res = await api.get(`/solo/${Cookies.get('matchId')}?option=matchType`);
        setMatchType(res.data.optionData);
      } catch (error) {
        console.log(`${error}`)
        navigate('/');
      }
    }

    fetchMatchData();
  }, [])


  return display;
}

export default Play