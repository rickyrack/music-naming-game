import React from 'react'
import "./style.scss";
import Leaderboard from './Leaderboard';
import Statusboard from './Statusboard';
import Menu from './Menu';

function Home() {
  return (
    <div className="home">
        <Statusboard />
        <Menu />
        <Leaderboard />
    </div>
  )
}

export default Home