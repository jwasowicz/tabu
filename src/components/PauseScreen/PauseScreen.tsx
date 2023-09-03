import PauseScreenButton from "./PauseScreenButton";
import PauseScreenText from "./PauseScreenText";
import Popup from "./Popup/Popup";
import "./styles.css";
import { useHelper } from "../../hooks/useHelper";
import { useTranslation } from "react-i18next";
const PauseScreen = () => {
  const {
    pauseSettings: { openedPopup },
  } = useHelper();

  const { t } = useTranslation();


  return (
    <div className="pause-screen">
      <PauseScreenButton
        open={true}
        location="/end-screen"
        text={t("Finish game")}
      />
      <PauseScreenText color="white" />
      <PauseScreenButton location="" margin={true} text={t("Rules")} />
      <PauseScreenButton
        location=""
        text={t("Sounds")}
        type="switch"
      />
      <PauseScreenButton open={true} location="/" text={t("Exit to menu")} />

      {openedPopup && <Popup />}
    </div>
  );
};

export default PauseScreen;
