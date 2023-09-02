import { FC} from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Icon from "../../Icon";
import { useHelper } from "../../hooks/useHelper";
import { useHandleScore } from "../../hooks/useHandleScore";
import { useHandleDisabled } from "../../hooks/useHandleDisabled";
import { switchAction } from "../../utils/switchAction";

interface Props {
  icon: OverridableComponent<SvgIconTypeMap>;
  action?: string;
  skipButton?: boolean;
}

const GameButton: FC<Props> = ({ icon, action, skipButton }) => {
  const { counter, dispatch, stats, options: {cardsLanguage}} = useHelper();

  const {
    disabledBlue,
    disabledRed,
    activeCounter
  } = counter;

  useHandleScore();
  useHandleDisabled();

  const handleClick = () => {
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
