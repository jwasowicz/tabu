import { FC} from "react";
import StartLogo from "./StartLogo";
import "./styles.css";
import StartScreenButton from "./StartSettingsButton";
import StartScreenIcons from "./StartScreenIcons";
import { useHelper } from "../../hooks/useHelper";
import OptionsScreen from "../OptionsScreen/OptionsScreen";

const StartScreem: FC = () => {
  const {
    options: { clickedIcon, iconType },
  } = useHelper();

  const renderOptions = (type: string) => {
    switch (type) {
      case "Settings":
        return <OptionsScreen />;
    }
  };

  return (
    <>
        <div className="game-container">
          <StartLogo />
          <StartScreenButton />
          <StartScreenIcons />
          {clickedIcon && renderOptions(iconType)}

        </div>
    </>
  );
};

export default StartScreem;

