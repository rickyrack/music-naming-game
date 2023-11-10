import React, { useState } from 'react';
import "./style.scss";
import MainMenu from './MainMenu';
import PlayMenu from './PlayMenu';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [menu, setMenu] = useState("MainMenu");
  const navigate = useNavigate();

  const handleClick = (clickName) => {
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

      default:
        setMenu(clickName);
        break;
    }

  }

  const currentMenu = menu === "MainMenu"
  ? <MainMenu handleClick={handleClick} />
  : menu === "PlayMenu"
  ? <PlayMenu handleClick={handleClick} />
  : setMenu("MainMenu"); //temporary

  return (
    currentMenu
  )
}

export default Menu