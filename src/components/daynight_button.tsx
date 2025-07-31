import "../styles/daynight_button.css";
import nightIcon from "../images/night.png";
import dayIcon from "../images/day.png";

interface ButtonProps {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

function ToggleButton({ toggled, setToggled }: ButtonProps) {
  return (
    <button
      className={`toggle-btn fixed z-50 bottom-3 right-3 lg:bottom-5 lg:right-8 w-[70px] h-[40px] lg:w-[75px] lg:h-[45px] ${toggled ? "toggled" : ""}`}
      onClick={() => setToggled(!toggled)}
    >
      <div className={`thumb w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] `}>
        <img src={toggled ? nightIcon : dayIcon} alt="Mode Icon" />
      </div>
    </button>
  );
}

export default ToggleButton;
