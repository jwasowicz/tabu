import { Link } from "react-router-dom";
import { useHelper } from "../../../hooks/useHelper";
import { setPauseSettings } from "../../../store/actions";

const RoundStartButton = () => {
  const { pauseSettings, dispatch } = useHelper();

  const handleClick = () => {
    dispatch(setPauseSettings({ ...pauseSettings, openedGameScreen: true }));
  };

  return (
    <Link to="/game-screen">
      <button onClick={handleClick} className="round-content__button">
        Start!
      </button>
    </Link>
  );
};

export default RoundStartButton;
