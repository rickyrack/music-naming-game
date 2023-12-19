import React from 'react'
import "./style.scss";
import Button from '../../../../components/Button';

function PracticeMenu({ handleClick }) {
  return (
    <menu>
        <Button text="Back" onClick={() => handleClick("MainMenu")}/>
        <Button text='Normal' onClick={() => handleClick('PracticePage', 'Normal')} />
        <Button text='Rapid' onClick={() => handleClick('PracticePage', 'Rapid')} />
    </menu>
  )
}

export default PracticeMenu