import PauseScreenButton from "./PauseScreenButton";
import PauseScreenText from "./PauseScreenText";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Popup from "./Popup/Popup";
import "./styles.css";
import { useHelper } from "../../hooks/useHelper";

const PauseScreen = () => {
  const {
    pauseSettings: { openedPopup },
  } = useHelper();

  return (
    <div className="pause-screen">
      <PauseScreenButton
        open={true}
        location="/end-screen"
        text="Finish Game"
      />
      <PauseScreenText color="white" />
      <PauseScreenButton location="" margin={true} text="Rules" />
      <PauseScreenButton
        location=""
        text="Report this word"
        icon={ReportProblemIcon}
      />
      <PauseScreenButton open={true} location="/" text="Exit to menu" />

      {openedPopup && <Popup />}
    </div>
  );
};

export default PauseScreen;
