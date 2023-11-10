import React from 'react'
import "./style.scss";

function TrackInfo({ trackData }) {
  return (
    <div className="trackInfo">
        <img src={trackData.albumCover} alt="Album Cover" />
        <ul>
            <li>Track:<br/>{trackData.title}</li>
            <li>Artist:<br/>{trackData.artist}</li>
        </ul>
    </div>
  )
}

export default TrackInfo