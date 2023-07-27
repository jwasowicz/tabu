import SettingsContainer from "./SettingsContainer";

const SettingsSkipContainer = () => {
  return (
    <SettingsContainer
      active="∞"
      headerName="Skip Limit"
      elements={["0", "5", "10", "15", "∞"]}
    />
  );
};

export default SettingsSkipContainer;
