import { useState } from "react";
import { useHelper } from "../../../hooks/useHelper";
import { secondsToMinutes, timeToSeconds } from "../../../utils/timeConvert";
import { useHandleTimer } from "../../../hooks/useHandleTimer";
import { useHandleTime } from "../../../hooks/useHandleTime";

const RoundTimeCounter = () => {
  const { roundTime } = useHelper();

  const [time, setTime] = useState(timeToSeconds(roundTime["Round Time"]));

  useHandleTime({ time });
  useHandleTimer({ setTime });

  return (
    <div className="round_section__timer">{secondsToMinutes(time, false)}</div>
  );
};

export default RoundTimeCounter;
