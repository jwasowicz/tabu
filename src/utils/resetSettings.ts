import {
  setCounter,
  setPauseSettings,
  setRoundTime,
  setStats,
  updateGameSettings,
} from "../store/actions";
import data from "../api/categoriesGB.json";
import { HelperResult } from "../hooks/useHelper";

export const resetSettings = ({
  dispatch,
  pauseSettings,
  counter,
  gameSettings,
  roundTime,
  stats,
}: HelperResult) => {
  const { mainCategories } = data;

  dispatch(
    setPauseSettings({
      ...pauseSettings,
      openedPopup: false,
      gamePause: false,
      openedGameScreen: false,
      animationStart: false,
      location: "",
    })
  );
  dispatch(
    setCounter({
      ...counter,
      redCounter: 0,
      blueCounter: 0,
      activeCounter: "red",
      roundCounter: 1,
      blueSkipCounter: 0,
      redSkipCounter: 0,
      blueTeamCounter: 0,
      redTeamCounter: 0,
      disabledBlue: false,
      disabledRed: false,
      redCounterActive: false,
      randomIndex: Math.floor(Math.random() * mainCategories.length),
    })
  );
  dispatch(
    updateGameSettings({
      ...gameSettings,
      limitHeader: "Points",
      limitFooter: "30",
    })
  );
  dispatch(
    setRoundTime({ ...roundTime, "Round Time": "2:00", "Skip Limit": "∞" })
  );
  dispatch(
    setStats({
      ...stats,
      counterBlueMinus: 0,
      counterBluePlus: 0,
      counterRedMinus: 0,
      counterRedPlus: 0,
      blueTimer: 0,
      redTimer: 0,
      redTimesArr: [],
      blueTimesArr: [],
      helpTimer: 0,
    })
  );
};
