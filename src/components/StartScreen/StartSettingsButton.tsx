import { Link } from "react-router-dom";
import { FC } from "react";

import {useTranslation} from 'react-i18next';

const StartSettingsButton: FC = () => {

  const {t} = useTranslation();


  return (
    <Link to="/settings">
      <button className="game-container__button">{t('Play with friends')}</button>
    </Link>
  );
};

export default StartSettingsButton;
