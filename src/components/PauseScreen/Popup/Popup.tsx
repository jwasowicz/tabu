import { useHelper } from "../../../hooks/useHelper";
import PopupContent from "./PopupContent";
import PopupHeader from "./PopupHeader";

const Popup = () => {
  const {
    pauseSettings: { animationStart },
  } = useHelper();

  return (
    <>
      <div className="popup-mask "></div>
      <div className={`popup-container ${animationStart ? "close" : ""}`}>
        <PopupHeader />
        <PopupContent />
      </div>
    </>
  );
};

export default Popup;
