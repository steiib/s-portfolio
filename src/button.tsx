import "./Button.css";
import nightIcon from "./assets/night.png";
import dayIcon from "./assets/day.png";

interface ButtonProps {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

function Button({ toggled, setToggled }: ButtonProps) {
  return (
    <div className="Button">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb">
          <img src={toggled ? nightIcon : dayIcon} alt="Mode Icon" />
        </div>
      </button>
    </div>
  );
}

export default Button;
