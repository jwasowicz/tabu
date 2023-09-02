import CloseIcon from "@mui/icons-material/Close";
import Icon from "../../../Icon";
import { setPauseSettings } from "../../../store/actions";
import { useHelper } from "../../../hooks/useHelper";
import { useTranslation } from "react-i18next";
const PopupHeader = () => {
  const { pauseSettings, dispatch } = useHelper();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(setPauseSettings({ ...pauseSettings, animationStart: true }));
    setTimeout(() => {
      dispatch(
        setPauseSettings({
          ...pauseSettings,
          openedPopup: false,
          animationStart: false,
        })
      );
    }, 550);
  };

  return (
    <header className="popup-container__header">
      <div className="popup-container__text-element">{t('Exit Game')}</div>
      <div onClick={handleClick} className="popup-container__close-element">
        <Icon icon={CloseIcon} />
      </div>
    </header>
  );
};

export default PopupHeader;
