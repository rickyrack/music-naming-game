import React from 'react'
import "./styles.scss";

function PlayerCard({ username, profileImg, score }) {
    // change to placeholders instead of figma copy
  return (
    <div className="playerCard">
        <img src={profileImg} alt="profile image" />
        <div className="playerInfo">
            <p>{username}</p>
            <p className="scoreText">Score: {score}</p>
        </div>
    </div>
  )
}

export default PlayerCard