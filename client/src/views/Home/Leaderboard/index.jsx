import React from 'react';
import "./style.scss";
import BronzeImg from "../../../assets/images/Leaderboard Trophies/Bronze Trophy.png";
import SilverImg from "../../../assets/images/Leaderboard Trophies/Silver Trophy.png";
import GoldImg from "../../../assets/images/Leaderboard Trophies/Gold Trophy.png";

function Leaderboard() {
  return (
    <div className="leaderboard">
        <h2 className='title'>Daily Mix Leaderboard</h2>
        <ul>
          <li>
            <img src={GoldImg} alt="1." /><p className='top1'> Test1</p>
          </li>
          <li>
            <img src={SilverImg} alt="2." /><p className='top2'> Test2</p>
          </li>
          <li>
            <img src={BronzeImg} alt="3." /><p className='top3'> Test3</p>
          </li>
        </ul>
    </div>
  )
}

export default Leaderboard