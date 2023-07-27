import { FC } from "react";
import SettingsSkipContainer from "./SettingsSkipContainer";
import SettingsTimeContainer from "./SettingsTimeContainer";
import SettingsLimitContainer from "./SettingsLimitContainer";

import "./styles.css";
import SettingsButton from "./SettingsButton";
import SettingsHeader from "./SettingsHeader";



const SettingsScreen: FC = () => {


  return (
    <div className="settings-container">
      <SettingsHeader />
      <SettingsSkipContainer />
      <SettingsTimeContainer />
      <SettingsLimitContainer />
      <SettingsButton />
    </div>
  );
};

export default SettingsScreen;
