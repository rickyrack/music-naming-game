import React from 'react'
import "./style.scss";
import Button from './button';

function Home() {
  return (
    <div className="home">
        <menu>
          <Button text="Practice" />
          <Button text="Play" />
          <Button text="Rules" />
        </menu>
    </div>
  )
}

export default Home