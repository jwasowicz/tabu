import { FC } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import "./styles.css";
import Icon from "../../Icon";
import { useHelper } from "../../hooks/useHelper";
import { setPauseSettings } from "../../store/actions";

interface Props {
  text: string;
  margin?: boolean;
  icon?: OverridableComponent<SvgIconTypeMap>;
  open?: boolean;
  location: string;
}

const PauseScreenButton: FC<Props> = ({
  text,
  margin,
  icon,
  open,
  location,
}) => {
  const { pauseSettings, dispatch } = useHelper();

  const handleClick = () => {
    if (open) {
      dispatch(
        setPauseSettings({
          ...pauseSettings,
          openedPopup: true,
          location: location,
        })
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        justifyContent: icon ? "space-between" : "center",
        marginTop: margin ? "1rem" : "",
      }}
      className="game-button"
    >
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default PauseScreenButton;
