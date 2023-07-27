import PopupContent from "./PopupContent";
import PopupHeader from "./PopupHeader";

const Popup = () => {
  return (
    <>
      <div className="popup-mask"></div>
      <div className="popup-container">
        <PopupHeader />
        <PopupContent />
      </div>
    </>
  );
};

export default Popup;
