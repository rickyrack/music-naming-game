// temp imports
import profileImg1 from "../../assets/images/temp/player1.png";
import profileImg2 from "../../assets/images/temp/player2.png";
import AlbumCover from "../../assets/images/temp/Test Album Cover.jpg";
import AlbumCover2 from "../../assets/images/temp/Test Album Cover 2.jpg";
// end temp imports

import React, { useEffect, useState } from 'react'
import "./styles.scss";
import { api } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import MatchInfo from "./MatchInfo";
import MusicHistory from "../components/MusicHistory";
import MusicPlayer from "../components/MusicPlayer";
import TrackInput from "../components/TrackInput";

function Practice() {
  // this is all test data
  const p1Data = {
    username: "monkeyman22",
    profileImg: profileImg1
  }

  const p2Data = {
    username: "nightraven217",
    profileImg: profileImg2
  }

  const matchData = {
    p1Score: 550,
    p2Score: 300,
    genre: "Classical",
    winScore: 1000
  }

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

  const [trackData, setTrackData] = useState('Loading...');

  useEffect(() => {
    // if play page was visited improperly, go to home
    if (!location.state?.active) return navigate('/');

    const { mode, genre } = location.state;

    const fetchMatchData = async () => {
      const res = await api.post('/play/start', {
        settings: {
          mode: mode,
          genre: genre
        }
      });

      setTrackData(res.data.track)
    }

    fetchMatchData();
  }, [])
  

  return (
    <div className="play">
      <section className='leftPanel'>
        <MatchInfo p1Data={p1Data} p2Data={p2Data} matchData={matchData} />
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