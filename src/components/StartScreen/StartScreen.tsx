import { FC } from "react";
import StartLogo from "./StartLogo";
import "./styles.css";
import StartScreenButton from "./StartSettingsButton";
import StartScreenIcons from "./StartScreenIcons";

const StartScreem: FC = () => {
  return (
    <div className="game-container">
      <StartLogo />
      <StartScreenButton />
      <StartScreenIcons />
    </div>
  );
};

export default StartScreem;
