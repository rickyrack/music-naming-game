import React from 'react'
import "./styles.scss";

function MusicPlayer({ trackData }) {
  return (
    <div className="player">
      {trackData}
    </div>
  )
}

export default MusicPlayer