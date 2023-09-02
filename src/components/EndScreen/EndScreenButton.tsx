import { FC } from "react";
import { Link } from "react-router-dom";
import { useHelper } from "../../hooks/useHelper";
import { resetSettings } from "../../utils/resetSettings";
import { useTranslation } from "react-i18next";
interface Props {
  text: string;
}

const EndScreenButton: FC<Props> = ({ text }) => {
  const { dispatch, counter, pauseSettings, gameSettings, roundTime, stats, options } =
    useHelper();

  const { t } = useTranslation();


  const handleReset = () => {
    resetSettings({
      dispatch,
      pauseSettings,
      counter,
      gameSettings,
      roundTime,
      stats,
      options
    });
  };

  return (
    <Link to={`${text === t("Game over") ? "/" : "/settings"} `}>
      <button
        onClick={handleReset}
        style={{ color: text === t("Game over") ? "#9B9B9B" : "#F64B1F"}}
        className={`end-screen__button`}
      >
        {text}
      </button>
    </Link>
  );
};

export default EndScreenButton;
