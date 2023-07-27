import { useHelper } from "../../hooks/useHelper";
import PauseScreen from "../PauseScreen/PauseScreen";
import RoundContent from "./RoundContent/RoundContent";
import RoundHeader from "./RoundHeader/RoundHeader";
import './styles.css';

const RoundScreen = () => {

  const {pauseSettings} = useHelper();
  const gamePause = pauseSettings.gamePause


  return (
    <>
    <div className="round-container">
        <RoundHeader />
        {gamePause ? <PauseScreen /> : <RoundContent />}

    </div>
    </>
  );
};

export default RoundScreen;
