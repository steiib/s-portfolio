import "../styles/Button.css";
import nightIcon from "../images/night.png";
import dayIcon from "../images/day.png";

interface ButtonProps {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

function Button({ toggled, setToggled }: ButtonProps) {
  return (
    <button
      className={`toggle-btn ${toggled ? "toggled" : ""}`}
      onClick={() => setToggled(!toggled)}
      aria-label="Toggle theme"
    >
      <div className="thumb">
        <img src={toggled ? nightIcon : dayIcon} alt="Mode Icon" />
      </div>
    </button>
  );
}

export default Button;
