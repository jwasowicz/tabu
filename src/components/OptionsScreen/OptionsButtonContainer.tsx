import { useHelper } from "../../hooks/useHelper";
import { returnLanguages } from "../../utils/returnLanguages";
import OptionsButton from "./OptionsButton";
import {useTranslation} from 'react-i18next';


const OptionsButtonContainer = () => {
  const {
    options: { interfaceLanguage, cardsLanguage },
  } = useHelper();

  const {returnCardsLang, returnInterfaceLang} = returnLanguages({interfaceLanguage, cardsLanguage})

  const { t} = useTranslation();

  return (
    <div className="options-screen__buttons-container">
      <OptionsButton text={t('Sounds')} options={{ type: "switch", cursor: 'default' }}/>
      <OptionsButton
        text={t('Notifications enabled')}
        options={{ type: "switch", cursor: 'default'}}
      />
      <OptionsButton text={t("Cards language")} options={{ type: "icon", icon: returnCardsLang(), cursor: 'default' }} />
      <OptionsButton text={t("Application language")} options={{ type: "icon", icon: returnInterfaceLang(), cursor: 'default'}} />
      <OptionsButton text={t("Send feedback")} options={{ type: "" , cursor: 'pointer'}} />
      <OptionsButton text={t("Rate TABU")} options={{ type: "", cursor: 'pointer'}} />
    </div>
  );
};

export default OptionsButtonContainer;
