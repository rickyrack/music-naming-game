import React from 'react'
import "./styles.scss";

function MusicPlayer({ trackData }) {
  return (
    <div className="player">
      <p>{trackData}</p>
    </div>
  )
}

export default MusicPlayer