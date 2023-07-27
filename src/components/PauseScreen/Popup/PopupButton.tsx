import { FC } from "react";
import { useHelper } from "../../../hooks/useHelper";
import { setPauseSettings } from "../../../store/actions";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
}

const PopupButton: FC<Props> = ({ text }) => {
  const { pauseSettings, dispatch } = useHelper();

  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "No") {
      dispatch(setPauseSettings({ ...pauseSettings, openedPopup: false }));
    } else {

        dispatch(setPauseSettings({ ...pauseSettings, openedPopup: false, gamePause: false }));
        navigate('/');
    }

  };

  return (
    <button
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
