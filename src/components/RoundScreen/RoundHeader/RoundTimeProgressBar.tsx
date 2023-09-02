import { useState, useEffect } from "react";
import { useHelper } from "../../../hooks/useHelper";
import { timeToSeconds } from "../../../utils/timeConvert";

const RoundTimeProgressBar = () => {
  const [width, setWidth] = useState(0);

  const {
    pauseSettings: { openedGameScreen, gamePause },
    roundTime,
    counter: { activeCounter },
  } = useHelper();

  const timeRound = roundTime["Round Time"];

  useEffect(() => {
    if (openedGameScreen && !gamePause) {
      const timer = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(timer);
            return 100;
          } else {
            return prevWidth + 100 / timeToSeconds(timeRound);
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [openedGameScreen, timeRound, gamePause]);

  return (
    <div className="round_section-bottom__progress">
      <div
        style={{
          width: `${width}%`,
          background: activeCounter === "red" ? "#E85452" : "#4DA9FC",
        }}
        className="progress"
      ></div>
    </div>
  );
};

export default RoundTimeProgressBar;
