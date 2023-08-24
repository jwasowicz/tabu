import { useEffect } from "react";
import { useHelper } from "./useHelper";
import { useNavigate } from "react-router-dom";
import { setCounter, setPauseSettings } from "../store/actions";
import data from "../api/categories.json";

interface Args {
  time: number;
}

export const useHandleTime = ({ time }: Args) => {
  const { counter, dispatch, pauseSettings } = useHelper();
  const { activeCounter, roundCounter, redCounterActive } = counter;

  const { mainCategories } = data;

  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mainCategories.length);

    if (time <= 0) {
      if (activeCounter === "red") {
        dispatch(
          setPauseSettings({
            ...pauseSettings,
            openedGameScreen: false,
            gamePause: false,
          })
        );
        dispatch(
          setCounter({
            ...counter,
            activeCounter: "blue",
            randomIndex: randomIndex,
          })
        );
        navigate("/round-screen");
      } else if (activeCounter === "blue") {
        dispatch(
          setPauseSettings({
            ...pauseSettings,
            openedGameScreen: false,
            gamePause: false,
          })
        );
        dispatch(
          setCounter({
            ...counter,
            activeCounter: "red",
            roundCounter: roundCounter + 1,
            randomIndex: randomIndex,
          })
        );

        redCounterActive ? navigate("/end-screen") : navigate("/round-screen");
      }
    }
  }, [time, redCounterActive, navigate]);
};
