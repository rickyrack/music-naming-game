import React, { useState } from 'react';
import "./style.scss";
import MainMenu from './MainMenu';
import PlayMenu from './PlayMenu';
import { useNavigate } from 'react-router-dom';
import PracticeMenu from './PracticeMenu';

function Menu() {
  const [menu, setMenu] = useState("MainMenu");
  const navigate = useNavigate();

  const handleClick = (clickName, mode) => {
    switch (clickName) {
      case "HowToPage":
        navigate('/howto');
        break;
      case "CasualPage":
        navigate('/casual');
        break;
      case "RankedPage":
        navigate('/ranked');
        break;
      case "PracticePage":
        navigate('/practice', { state: { mode: mode }}); // this is incomplete and is just its own page right now
        break;

      default:
        setMenu(clickName);
        break;
    }
  }

  const currentMenu = menu === "MainMenu"
    ? <MainMenu handleClick={handleClick} />
    : menu === "PlayMenu"
    ? <PlayMenu handleClick={handleClick} />
    : menu === "PracticeMenu"
    ? <PracticeMenu handleClick={handleClick} />
    : setMenu("MainMenu"); //backup if button does not go anywhere yet

  return (
    currentMenu
  )
}

export default Menu