import { Settings } from "../../store/types";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export type RootState = {
  gameSettings: Settings;
};

const SettingsButton = () => {
  const { t } = useTranslation();

  return (
    <Link to="/round-screen">
      <button className="settings-container__button">{t('Play')}</button>
    </Link>
  );
};

export default SettingsButton;
