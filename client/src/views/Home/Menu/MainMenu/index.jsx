import "./style.module.scss";
import Button1 from "../../../../components/Button";

function MainMenu({ handleClick }) {
  return (
    <menu>
      <Button1 text="Practice" onClick={() => handleClick("PracticeMenu")}/>
      <Button1 text="Play" onClick={() => handleClick("PlayMenu")} />
      <Button1 text="How To" style="HowTo" onClick={() => handleClick("HowToPage")}/>
    </menu>
  );
}

export default MainMenu;
