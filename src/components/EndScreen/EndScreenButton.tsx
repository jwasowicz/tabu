import { FC } from "react";
import { Link } from "react-router-dom";
import { useHelper } from "../../hooks/useHelper";
import { resetSettings } from "../../utils/resetSettings";

interface Props {
  text: string;
}

const EndScreenButton: FC<Props> = ({ text }) => {
  const { dispatch, counter, pauseSettings, gameSettings, roundTime, stats } =
    useHelper();

  const handleReset = () => {
    resetSettings({
      dispatch,
      pauseSettings,
      counter,
      gameSettings,
      roundTime,
      stats,
    });
  };

  return (
    <Link to={`${text === "Game Over" ? "/" : "/settings"} `}>
      <button
        onClick={handleReset}
        style={{ color: text === "Game Over" ? "#9B9B9B" : "#F64B1F" }}
        className={`end-screen__button`}
      >
        {text}
      </button>
    </Link>
  );
};

export default EndScreenButton;
