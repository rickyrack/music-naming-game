import React from 'react'
import "./style.scss";
import PlayerCard from './PlayerCard';

function MatchInfo({ p1Data, p2Data, matchData }) {
  return (
    <div className="info">
        <section>
          <PlayerCard username={p1Data.username} profileImg={p1Data.profileImg} score={matchData.p1Score} />
        </section>
        <section>
          <PlayerCard username={p2Data.username} profileImg={p2Data.profileImg} score={matchData.p2Score} />
        </section>
        <section className='matchInfo'>
          <p>Genre:<br/>{matchData.genre}</p>
          <p>Score to Win:<br/>{matchData.winScore}</p>
        </section>
    </div>
  )
}

export default MatchInfo