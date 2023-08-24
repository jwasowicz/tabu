import PauseScreenText from "../PauseScreenText";
import PopupButton from "./PopupButton";

const PopupContent = () => {
  return (
    <div className={`popup-container__content `}>
      <PauseScreenText color="#6F6F6F" />
      <div className="buttons-container">
        <PopupButton text="Yes" />
        <PopupButton text="No" />
      </div>
    </div>
  );
};

export default PopupContent;
