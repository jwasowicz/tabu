import SettingsContainer from "./SettingsContainer";
const SettingsLimitContainer = () => {
  return (
    <SettingsContainer
      active="Points"
      elements={["Rounds", "Points", "None"]}
      headerName="Limit"
      limitValues={true}
    />
  );
};

export default SettingsLimitContainer;
