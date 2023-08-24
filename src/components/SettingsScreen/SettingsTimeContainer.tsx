import SettingsContainer from "./SettingsContainer";

const SettingsTimeContainer = () => {
  return (
    <SettingsContainer
      active="2:00"
      headerName="Round Time"
      elements={[10, 60, 120, 180, 300]}
    />
  );
};

export default SettingsTimeContainer;
