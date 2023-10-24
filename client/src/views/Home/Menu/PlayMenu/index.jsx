import React from 'react'
import Button from '../../../../components/Button'

function PlayMenu({ handleClick }) {
  return (
    <menu className="menu">
        <Button text="Back" onClick={() => handleClick("MainMenu")}/>
        <Button text="Casual" onClick={() => console.log("Casual")}/>
        <Button text="Ranked" onClick={() => console.log("Ranked")}/>
    </menu>
  )
}

export default PlayMenu