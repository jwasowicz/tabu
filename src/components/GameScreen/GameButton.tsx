import { FC} from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Icon from "../../Icon";
import { useHelper } from "../../hooks/useHelper";
import { useHandleScore } from "../../hooks/useHandleScore";
import { useHandleDisabled } from "../../hooks/useHandleDisabled";
import { switchAction } from "../../utils/switchAction";
import useSound from "use-sound";
const incrementSound = require("../../assets/sounds/increment.mp3");
const decrementSound = require("../../assets/sounds/decrement.mp3");
const skipSound = require("../../assets/sounds/skip.mp3");

interface Props {
  icon: OverridableComponent<SvgIconTypeMap>;
  action?: string;
  skipButton?: boolean;
}

const GameButton: FC<Props> = ({ icon, action, skipButton }) => {
  const { counter, dispatch, stats, options: {cardsLanguage, soundsOptionChecked}} = useHelper();
  const [playIncrement] = useSound(incrementSound, {volume: 0.5});
  const [playDecrement] = useSound(decrementSound, {volume: 0.5});
  const [playSkip] = useSound(skipSound, {volume: 0.5})

  const switchAudio = () => {

    switch(action) {
      case "increment":
        return playIncrement();
      case "decrement":
        return playDecrement();
      case "skip":
        return playSkip();
      default:
        return;
    }

  }

  const {
    disabledBlue,
    disabledRed,
    activeCounter
  } = counter;

  useHandleScore();
  useHandleDisabled();

  const handleClick = () => {

    soundsOptionChecked && switchAudio();
    switchAction({stats, counter, dispatch, action, cardsLanguage});
  };

  return (
    <button
      disabled={
        skipButton
          ? activeCounter === "red"
            ? disabledRed
            : disabledBlue
          : false
      }
      onClick={handleClick}
      className="game-screen__button"
    >
      <Icon icon={icon} />
    </button>
  );
};

export default GameButton;
