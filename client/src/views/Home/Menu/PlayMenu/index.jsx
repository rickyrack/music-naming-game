import React from 'react'
import Button1 from '../../../../components/Button'
import './style.module.css';
function PlayMenu({ handleClick }) {
  return (
    <menu>
        <Button1 text="Back" onClick={() => handleClick("MainMenu")}/>
        <Button1 text="Casual" onClick={() => handleClick("CasualPage")}/>
        <Button1 text="Ranked" onClick={() => handleClick("RankedPage")}/>
    </menu>
  )
}

export default PlayMenu