import React from 'react'
import "./style.scss";
import MatchInfo from './components/MatchInfo';
import MusicPlayer from './components/MusicPlayer';
import SongInput from './components/SongInput';
import MusicHistory from './components/MusicHistory';

function Play() {
  return (
    <div className="play">
      <section className='leftPanel'>
        <MatchInfo />
      </section>
      <section className="middlePanel">
        <MusicPlayer />
        <SongInput />
      </section>
      <section className='rightPanel'>
        <MusicHistory />
      </section>
    </div>
  )
}

export default Play