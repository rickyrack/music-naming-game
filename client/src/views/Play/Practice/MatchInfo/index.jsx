import React from 'react'
import "./styles.scss";
import PlayerCard from './PlayerCard';

function MatchInfo({ p1Data, matchData }) {
  return (
    <div className="info">
        <section>
          <PlayerCard username={p1Data.username} avatarId={p1Data.avatarId} score={matchData.score.p1} />
        </section>
        <section className='matchInfo'>
          <p>Genre:<br/>{matchData.genre}</p>
          <p>Score to Win:<br/>{matchData.winScore}</p>
        </section>
    </div>
  )
}

export default MatchInfo