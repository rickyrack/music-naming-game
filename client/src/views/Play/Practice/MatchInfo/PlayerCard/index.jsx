import React from 'react'
import "./styles.scss";
import Avatar from '../../../../../components/Avatar';

function PlayerCard({ username, avatarId, score }) {
  return (
    <div className="playerCard">
        <Avatar size='8rem' seed={`${avatarId}`} />
        <div className="playerInfo">
            <p>{username}</p>
            <p className="scoreText">Score: {score}</p>
        </div>
    </div>
  )
}

export default PlayerCard