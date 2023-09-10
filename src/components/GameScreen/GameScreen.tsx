import RoundHeader from "../RoundScreen/RoundHeader/RoundHeader";
import GameButton from "./GameButton";
import GameCard from "./GameCard";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckIcon from "@mui/icons-material/Check";
import "./styles.css";
import { useHelper } from "../../hooks/useHelper";
import PauseScreen from "../PauseScreen/PauseScreen";
import GameScreenBackground from "./GameScreenBackground";

const GameScreen = () => {
  const {
    pauseSettings: { gamePause },
    counter: { activeCounter },
  } = useHelper();

  return (
    <>
      <GameScreenBackground result={activeCounter}/>
      <div
        style={{ background: activeCounter === "red" ? "#E85452" : "#4DA9FC" }}
        className="game-screen"
      >
        <RoundHeader />
        {gamePause ? (
          <PauseScreen />
        ) : (
          <>
            <GameCard />
            <div className="game-screen__button-container">
              <GameButton action="decrement" icon={CloseIcon} />
              <GameButton skipButton={true} action="skip" icon={ReplayIcon} />
              <GameButton action="increment" icon={CheckIcon} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GameScreen;
