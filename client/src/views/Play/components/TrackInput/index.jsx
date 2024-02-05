import React, { useState } from 'react'
import "./styles.scss";
import Button from "../../../../components/Button";

function TrackInput() {
  const [trackInput, setTrackInput] = useState('Name the song...');
  //const [firstInput, setFirstInput] = useState(true);

  const handleInput = (userInput) => {
    setTrackInput('');
    setTrackInput(userInput);
  }

  const clearInput = () => {
    //if (firstInput) setTrackInput('');
    //setFirstInput(false);
    setTrackInput('');
  }

  return (
    <div className="trackInput">
      <input type="text" name='trackInput' value={trackInput}
        onChange={e => handleInput(e.target.value)} onFocus={clearInput} />
      <Button text="Submit" />
    </div>
  )
}

export default TrackInput