import SettingsContainer from "./SettingsContainer";
import { useTranslation } from "react-i18next";

const SettingsSkipContainer = () => {

  const { t } = useTranslation();
  return (
    <SettingsContainer
      active="∞"
      headerName={t("Skip Limit")}
      elements={["0", "5", "10", "15", "∞"]}
    />
  );
};

export default SettingsSkipContainer;
