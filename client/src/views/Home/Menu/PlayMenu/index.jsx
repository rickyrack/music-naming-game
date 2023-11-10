import React from 'react'
import Button from '../../../../components/Button'

function PlayMenu({ handleClick }) {
  return (
    <menu className="menu">
        <Button text="Back" onClick={() => handleClick("MainMenu")}/>
        <Button text="Casual" onClick={() => handleClick("CasualPage")}/>
        <Button text="Ranked" onClick={() => handleClick("RankedPage")}/>
    </menu>
  )
}

export default PlayMenu