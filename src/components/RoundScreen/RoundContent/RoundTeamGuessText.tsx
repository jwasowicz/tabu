import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  teamGuess: string;
}

const RoundTeamGuessText: FC<Props> = ({ teamGuess }) => {
  const { t } = useTranslation();



  return (
    <div className="round-content__block-text">
      <h3>{t('Guessing Team')}</h3>
      <h1 className="round-content__teamGuessText">{teamGuess === "red" ? t('Red') : t('Blue')}</h1>
    </div>
  );
};

export default RoundTeamGuessText;
