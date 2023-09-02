import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  color: string;
}

const PauseScreenText: FC<Props> = ({ color }) => {
  const { t } = useTranslation();
  return (
    <p style={{ color: color }} className="pause-screen__info">
      {t('Click the button to finish game with the current score')}
    </p>
  );
};

export default PauseScreenText;
