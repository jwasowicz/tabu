import { useEffect } from "react";
import { useHelper } from "./useHelper";
import { useNavigate } from "react-router-dom";
import { setCounter, setPauseSettings } from "../store/actions";
import dataGB from "../api/categoriesGB.json";
import dataPL from "../api/categoriesPL.json";

interface Args {
  time: number;
}

export const useHandleTime = ({ time }: Args) => {
  const { counter, dispatch, pauseSettings, options: {cardsLanguage} } = useHelper();
  const { activeCounter, roundCounter, redCounterActive } = counter;

  const { mainCategories: GB } = dataGB;
  const { mainCategories: PL } = dataPL;

  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * (cardsLanguage === "PL" ? PL.length : GB.length)
    );

    if (time <= 0) {
      if (activeCounter === "red") {
        dispatch(
          setPauseSettings({
            ...pauseSettings,
            openedGameScreen: false,
            gamePause: false,
            disabledGamePause: false,
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
            disabledGamePause: false,
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
  }, [time, redCounterActive, navigate, GB.length, PL.length, cardsLanguage]);
};
