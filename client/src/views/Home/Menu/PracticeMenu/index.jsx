import React from 'react'
import "./style.scss";
import Button1 from '../../../../components/Button';

function PracticeMenu({ handleClick }) {
  return (
    <menu>
        <Button1 text="Back" onClick={() => handleClick("MainMenu")}/>
        <Button1 text='Normal' onClick={() => handleClick('PracticePage', 'Normal')} />
        <Button1 text='Rapid' onClick={() => handleClick('PracticePage', 'Rapid')} />
    </menu>
  )
}

export default PracticeMenu