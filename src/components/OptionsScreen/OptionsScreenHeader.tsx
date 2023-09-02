import OptionsBackButton from "./OptionsBackButton"
import {useTranslation} from 'react-i18next';

const OptionsScreenHeader = () => {

  const { t} = useTranslation();

  return (
    <div className="options-screen__header">
        <OptionsBackButton />
        <h2 className="options-screen__h2">{t('Settings')}</h2>
    </div>
  )
}

export default OptionsScreenHeader