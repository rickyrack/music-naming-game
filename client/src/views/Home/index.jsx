import React from 'react'
import "./style.scss";
import Button from './button';
import Leaderboard from './Leaderboard';

function Home() {
  return (
    <div className="home">
        <menu>
          <Button text="Practice" />
          <Button text="Play" />
          <Button text="Rules" />
        </menu>
        <Leaderboard />
    </div>
  )
}

export default Home