import SettingsIcon from "../../Icon";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useHelper } from "../../hooks/useHelper";
import { filterSettings } from "../../utils/filterSettings";
import { useTranslation } from "react-i18next";

const SettingsTimer = () => {
  const { gameSettings: timeSettings, roundTime: timeRound } = useHelper();
  const { t } = useTranslation();

  const timerSettings = filterSettings(timeSettings);

  const limitHeader = timerSettings["limitHeader"];
  const limitFooter = parseInt(timerSettings["limitFooter"]);
  const roundTime = parseInt(timeRound["Round Time"]);

  const checkNaN = () => {
    return (
      !isNaN(
        limitFooter * 2 * (roundTime === 0 ? 0.5 : roundTime) + limitFooter / 2
      ) && !isNaN(roundTime)
    );
  };

  return (
    <div className="settings-container__wrapper">
      <SettingsIcon icon={AccessTimeIcon} />
      <h3 className="settings-container_h3">
        ~{" "}
        {limitHeader === t("Points")
          ? `${limitFooter}'`
          : limitHeader === t("None")
          ? "∞"
          : `${
              checkNaN()
                ? limitFooter * 2 * (roundTime === 0 ? 0.5 : roundTime) +
                  limitFooter / 2
                : ""
            }'`}
      </h3>
    </div>
  );
};

export default SettingsTimer;
