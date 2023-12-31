import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useHelper } from "./useHelper";
import { setPauseSettings, setStats } from "../store/actions";
import { timeToSeconds } from "../utils/timeConvert";
import useSound from "use-sound";

const timerSound = require("../assets/sounds/timer.mp3");

interface Args {
  setTime: Dispatch<SetStateAction<number>>;
}

export const useHandleTimer = ({ setTime }: Args) => {
  const {
    pauseSettings,
    dispatch,
    stats,
    counter: { activeCounter },
    roundTime,
    options: {soundsOptionChecked}
  } = useHelper();
  const { redTimer, blueTimer } = stats;
  const { openedGameScreen, gamePause } = pauseSettings;

  const copyStatsRef = useRef(stats);

  const [playTimerSound] = useSound(timerSound, {volume: 0.4});

  const timeRound = timeToSeconds(roundTime["Round Time"]);

  useEffect(() => {
    copyStatsRef.current = stats;
  }, [stats]);

  useEffect(() => {
    if (openedGameScreen && !gamePause) {
      const timeID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            return 0;
          } else {
            if (prevTime === 6) {
              soundsOptionChecked && playTimerSound();
              dispatch(setPauseSettings({...pauseSettings, disabledGamePause: true}))
            }

            const updatedStats = {
              ...copyStatsRef.current,
              [activeCounter === "red" ? "redTimer" : "blueTimer"]:
                (activeCounter === "blue" ? blueTimer : redTimer) + 1,
            };
            dispatch(setStats(updatedStats));
            return prevTime - 1;
          }
        });
      }, 1000);
      return () => clearInterval(timeID);
    }
  }, [
    gamePause,
    openedGameScreen,
    redTimer,
    blueTimer,
    dispatch,
    pauseSettings,
    activeCounter,
    playTimerSound,
    timeRound,
    soundsOptionChecked,
    setTime,
  ]);
};
