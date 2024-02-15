// temp imports
import profileImg1 from "../../assets/images/temp/player1.png";
import profileImg2 from "../../assets/images/temp/player2.png";
import AlbumCover from "../../assets/images/temp/Test Album Cover.jpg";
import AlbumCover2 from "../../assets/images/temp/Test Album Cover 2.jpg";
// end temp imports

import React, { useEffect, useState } from 'react'
import "./styles.scss";
import MatchInfo from './components/MatchInfo';
import MusicPlayer from './components/MusicPlayer';
import TrackInput from './components/TrackInput';
import MusicHistory from './components/MusicHistory';
import { api } from '../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';

function Online() {
  return (
    <div className="play">

    </div>
  )
}

export default Online