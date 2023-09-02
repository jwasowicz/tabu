import PauseScreenText from "../PauseScreenText";
import PopupButton from "./PopupButton";
import { useTranslation } from "react-i18next";

const PopupContent = () => {
  const { t } = useTranslation();

  return (
    <div className={`popup-container__content `}>
      <PauseScreenText color="#6F6F6F" />
      <div className="buttons-container">
        <PopupButton text={t("Yes")} />
        <PopupButton text={t("No")} />
      </div>
    </div>
  );
};

export default PopupContent;
