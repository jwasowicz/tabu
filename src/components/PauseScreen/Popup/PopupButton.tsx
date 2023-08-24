import { FC, useRef } from "react";
import { useHelper } from "../../../hooks/useHelper";
import { setPauseSettings } from "../../../store/actions";
import { useNavigate } from "react-router-dom";
import { resetSettings } from "../../../utils/resetSettings";

interface Props {
  text: string;
}

const PopupButton: FC<Props> = ({ text }) => {
  const { pauseSettings, dispatch, counter, gameSettings, roundTime, stats } =
    useHelper();

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { location } = pauseSettings;

  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "No") {
      dispatch(setPauseSettings({ ...pauseSettings, animationStart: true }));
      setTimeout(() => {
        dispatch(
          setPauseSettings({
            ...pauseSettings,
            openedPopup: false,
            animationStart: false,
          })
        );
      }, 550);
    } else {
      dispatch(setPauseSettings({ ...pauseSettings, animationStart: true }));

      setTimeout(() => {
        location === "/" &&
          resetSettings({
            dispatch,
            pauseSettings,
            counter,
            gameSettings,
            roundTime,
            stats,
          });
        navigate(location);
      }, 400);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`buttons-container__button ${
        text === "Yes" ? "exit" : "return"
      }`}
    >
      {text}
    </button>
  );
};

export default PopupButton;
