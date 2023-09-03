import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Icon from "../../../Icon";
import { useHelper } from "../../../hooks/useHelper";
import { setPauseSettings } from "../../../store/actions";

const RoundPauseButton = () => {
  const { pauseSettings, dispatch } = useHelper();

  const { gamePause, disabledGamePause } = pauseSettings;

  const handleClick = () => {
    dispatch(setPauseSettings({ ...pauseSettings, gamePause: !gamePause }));
  };

  return (
    <button disabled={disabledGamePause} onClick={handleClick} className="round_container__button">
      <Icon icon={gamePause ? PlayArrowIcon : PauseIcon} />
    </button>
  );
};

export default RoundPauseButton;
