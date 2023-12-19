import "./style.scss";
import Button from "../../../../components/Button";

function MainMenu({ handleClick }) {
  return (
    <menu>
      <Button text="Practice" onClick={() => handleClick("PracticeMenu")}/>
      <Button text="Play" onClick={() => handleClick("PlayMenu")} />
      <Button text="How To" style="HowTo" onClick={() => handleClick("HowToPage")}/>
    </menu>
  );
}

export default MainMenu;
