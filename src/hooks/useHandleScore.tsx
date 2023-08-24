import { useNavigate } from "react-router-dom";
import { setCounter, setPauseSettings } from "../store/actions";
import { useHelper } from "./useHelper";

export const useHandleScore = () => {
  const { gameSettings, counter, dispatch, pauseSettings } = useHelper();

  const { roundCounter, redTeamCounter, blueTeamCounter } = counter;

  const navigate = useNavigate();

  const { limitFooter: limitValue, limitHeader } = gameSettings;

  const handlePoints = () => {
    if (redTeamCounter === Number(limitValue)) {
      dispatch(
        setCounter({
          ...counter,
          activeCounter: "blue",
          redTeamCounter: 0,
          redCounterActive: true,
        })
      );
      dispatch(setPauseSettings({ ...pauseSettings, openedGameScreen: false }));
      navigate("/round-screen");
    } else if (blueTeamCounter === Number(limitValue)) {
      dispatch(
        setCounter({ ...counter, activeCounter: "red", blueTeamCounter: 0 })
      );
      dispatch(setPauseSettings({ ...pauseSettings, openedGameScreen: false }));
      navigate("/end-screen");
    }
  };

  const handleRounds = () => {
    if (roundCounter > Number(limitValue)) {
      navigate("/end-screen");
    }
  };

  switch (limitHeader) {
    case "Points":
      return handlePoints();
    case "Rounds":
      return handleRounds();
  }
};
