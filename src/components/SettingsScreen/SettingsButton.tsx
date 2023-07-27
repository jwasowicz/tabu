import { Settings } from "../../store/types";

import { Link } from "react-router-dom";

export type RootState = {
  gameSettings: Settings;
};

const SettingsButton = () => {
  return (
    <Link to="/game-screen">
      <button className="settings-container__button">Play</button>
    </Link>
  );
};

export default SettingsButton;
