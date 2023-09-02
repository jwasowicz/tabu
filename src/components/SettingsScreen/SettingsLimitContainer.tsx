import SettingsContainer from "./SettingsContainer";
import { useTranslation } from "react-i18next";

const SettingsLimitContainer = () => {

  const { t } = useTranslation();

  return (
    <SettingsContainer
      active={t("Points")}
      elements={[t("Rounds"), t("Points"), t("None")]}
      headerName={t("Limit")}
      limitValues={true}
    />
  );
};

export default SettingsLimitContainer;
