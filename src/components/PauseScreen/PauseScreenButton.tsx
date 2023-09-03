import { FC } from "react";
import "./styles.css";
import { useHelper } from "../../hooks/useHelper";
import { setOptionsSettings, setPauseSettings } from "../../store/actions";
import Switch from "react-switch";


interface Props {
  text: string;
  margin?: boolean;
  type?: string;
  open?: boolean;
  location: string;
}

const PauseScreenButton: FC<Props> = ({
  text,
  margin,
  type,
  open,
  location,
}) => {
  const { pauseSettings, dispatch, options} = useHelper();

  const {soundsOptionChecked} = options;

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

  const handleSwitch = () => {
    dispatch(setOptionsSettings({...options, soundsOptionChecked: !soundsOptionChecked}));
  }

  return (
    <button
      onClick={handleClick}
      style={{
        justifyContent: type === "switch" ? "space-between" : "center",
        marginTop: margin ? "1rem" : "",
        padding: type === "switch" ? "1rem" : "",
      }}
      className="game-button"
    >
      {text}
      {type === "switch" && (
        <Switch
          offColor="#C0C0C0"
          onColor="#C0C0C0"
          offHandleColor="#666666"
          onHandleColor="#FB5629"
          height={38}
          width={75}
          handleDiameter={40}
          borderRadius={10}
          uncheckedIcon={true}
          boxShadow="0 4px 8px -2px #42445a"
          activeBoxShadow="0"
          checkedIcon={true}
          checked={soundsOptionChecked}
          onChange={handleSwitch}
        />
      )}
    </button>
  );
};

export default PauseScreenButton;
