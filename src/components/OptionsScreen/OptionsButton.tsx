import { FC, MouseEvent, useEffect } from "react";
import { FlagComponent } from "country-flag-icons/react/3x2";
import Switch from "react-switch";
import { useHelper } from "../../hooks/useHelper";
import { setOptionsSettings } from "../../store/actions";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
  options: {
    type: string;
    icon?: FlagComponent;
    cursor: string;
  };
}

const OptionsButton: FC<Props> = ({ text, options }) => {
  const Icon = options.icon;

  const { options: optionSettings, dispatch } = useHelper();

  const { t } = useTranslation();

  const {
    soundsOptionChecked,
    notificationsOptionChecked,
    interfaceLanguage,
    cardsLanguage,
  } = optionSettings;

  const handleSwitch = () => {
    switch (text) {
      case t("Sounds"):
        return dispatch(
          setOptionsSettings({
            ...optionSettings,
            soundsOptionChecked: !soundsOptionChecked,
          })
        );

      case t("Notifications enabled"):
        return dispatch(
          setOptionsSettings({
            ...optionSettings,
            notificationsOptionChecked: !notificationsOptionChecked,
          })
        );
      default:
        return;
    }
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget.parentNode;

    if (target?.textContent === t("Cards language")) {
      dispatch(
        setOptionsSettings({
          ...optionSettings,
          cardsLanguage: cardsLanguage === "PL" ? "GB" : "PL",
        })
      );
    } else if (target?.textContent === t("Application language")) {
      dispatch(
        setOptionsSettings({
          ...optionSettings,
          interfaceLanguage: interfaceLanguage === "PL" ? "GB" : "PL",
          cardsLanguage: interfaceLanguage === "PL" ? "GB" : "PL"
        })
      );

      i18n.changeLanguage(interfaceLanguage.toLowerCase());
    }
  };

  useEffect(() => {
    i18n.changeLanguage(interfaceLanguage.toLowerCase());
  }, [interfaceLanguage]);

  return (
    <button
      style={{
        padding: "1.5rem",
        cursor: options.cursor,
        justifyContent:
          options.type === "icon" || options.type === "switch"
            ? "flex-start"
            : "center",
      }}
      className="buttons-container__button"
    >
      <div className="button__text">{text}</div>
      {options.type === "icon"
        ? Icon && (
            <Icon
              onClick={(e) => handleClick(e)}
              style={{
                position: options.type === "icon" ? "absolute" : "static",
                right: options.type === "icon" ? "10%" : "",
              }}
              className="options-screen__icon"
            />
          )
        : options.type === "switch" && (
            <div style={{ position: "absolute", right: "6%" }}>
              <Switch
                offColor="#C0C0C0"
                onColor="#C0C0C0"
                offHandleColor="#777777"
                onHandleColor="#FB5629"
                height={35}
                width={70}
                borderRadius={10}
                uncheckedIcon={true}
                boxShadow="0 4px 8px -2px #42445a"
                activeBoxShadow="0"
                checkedIcon={true}
                checked={
                  text === t("Sounds")
                    ? soundsOptionChecked
                    : notificationsOptionChecked
                }
                onChange={handleSwitch}
              />
            </div>
          )}
    </button>
  );
};

export default OptionsButton;
