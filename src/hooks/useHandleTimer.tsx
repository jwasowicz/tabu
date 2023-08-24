import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useHelper } from "./useHelper";
import { setStats } from "../store/actions";

interface Args {
  setTime: Dispatch<SetStateAction<number>>;
}

export const useHandleTimer = ({ setTime }: Args) => {
  const {
    pauseSettings,
    dispatch,
    stats,
    counter: { activeCounter },
  } = useHelper();
  const { redTimer, blueTimer } = stats;
  const { openedGameScreen, gamePause } = pauseSettings;

  const copyStatsRef = useRef(stats);

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
    activeCounter,
    setTime,
  ]);
};
