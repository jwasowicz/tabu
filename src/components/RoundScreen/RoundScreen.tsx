import { useEffect } from "react";
import { useHelper } from "../../hooks/useHelper";
import PauseScreen from "../PauseScreen/PauseScreen";
import RoundContent from "./RoundContent/RoundContent";
import RoundHeader from "./RoundHeader/RoundHeader";
import "./styles.css";
import { setCounter } from "../../store/actions";

const RoundScreen = () => {
  const { pauseSettings, counter, dispatch } = useHelper();
  const { gamePause } = pauseSettings;
  const { activeCounter } = counter;

  useEffect(() => {
    if (gamePause) {
      dispatch(setCounter({ ...counter, isAnimationStarted: true }));
    } else {
      dispatch(setCounter({ ...counter, isAnimationStarted: false }));
    }
  }, [dispatch, gamePause]);

  return (
    <>
      <div
        style={{ background: activeCounter === "red" ? "#E85155" : "#50A8FD" }}
        className="round-container"
      >
        <RoundHeader />
        {gamePause ? <PauseScreen /> : <RoundContent />}
      </div>
    </>
  );
};

export default RoundScreen;
