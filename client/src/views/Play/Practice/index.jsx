// temp imports
import profileImg1 from "../../../assets/images/temp/player1.png";
import profileImg2 from "../../../assets/images/temp/player2.png";
import AlbumCover from "../../../assets/images/temp/Test Album Cover.jpg";
import AlbumCover2 from "../../../assets/images/temp/Test Album Cover 2.jpg";
// end temp imports

import React, { useEffect, useMemo, useState } from 'react'
import "./styles.scss";
import { api } from '../../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import MatchInfo from "./MatchInfo";
import MusicHistory from "../components/MusicHistory";
import MusicPlayer from "../components/MusicPlayer";
import TrackInput from "../components/TrackInput";
import Cookies from 'js-cookie';

function Practice() {
  // this is all test data
  const historyData = [
    {
      id: 0,
      title: "Snow",
      artist: "Red Hot Chili Peppers",
      albumCover: AlbumCover
    },
    {
      id: 1,
      title: "God's Plan",
      artist: "Drake",
      albumCover: AlbumCover2
    }
  ]
  // end test data

  const location = useLocation();
  const navigate = useNavigate();

  const [matchData, setMatchData] = useState({});
  const [trackData, setTrackData] = useState('Loading...');
  const [p1Data, setP1Data] = useState({});

  const fetchP1Data = async (uid) => {
    try {
      const res = await api.get(`/user/${uid}`);
      setP1Data(res.data);

    } catch (error) {
      console.log(`${error}`)
    }
  }

  const fetchMatchData = async () => {
    try {
      const res = await api.get(`/solo/${Cookies.get('matchId')}?option=newTrack`);
      console.log(res.data)
      setMatchData(res.data.matchData);
      setTrackData(res.data.optionData.track);
      fetchP1Data(res.data.matchData.players[0]);

    } catch (error) {
      console.log(`${error}`);
    }
  }

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div className="playPractice">
      <section className='leftPanel'>
        <MatchInfo p1Data={p1Data} matchData={matchData} />
      </section>
      <section className='middlePanel'>
        <MusicPlayer trackData={trackData} />
        <TrackInput />
      </section>
      <section className='rightPanel'>
        <MusicHistory historyData={historyData} />
      </section>
    </div>
  )
}

export default Practice