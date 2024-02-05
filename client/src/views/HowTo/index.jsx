import React from 'react'
import "./style.module.scss";
import Button1 from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function HowTo() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  }

  return (
    <div className="howTo">
      <main>
        <section>
          <h1>How To Play</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean. Cursus risus at ultrices mi tempus imperdiet nulla. Duis ut diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam. Congue eu consequat ac felis donec. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Diam vel quam elementum pulvinar etiam non quam.</p>
        </section>
        <Button1 text="Back" onClick={() => handleBack()}/>
      </main>
    </div>
  )
}

export default HowTo