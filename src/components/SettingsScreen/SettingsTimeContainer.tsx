import SettingsContainer from "./SettingsContainer";
import { useTranslation } from "react-i18next";

const SettingsTimeContainer = () => {
  const { t } = useTranslation();

  return (
    <SettingsContainer
      active="2:00"
      headerName={t("Round Time")}
      elements={[15, 60, 120, 180, 300]}
    />
  );
};

export default SettingsTimeContainer;
