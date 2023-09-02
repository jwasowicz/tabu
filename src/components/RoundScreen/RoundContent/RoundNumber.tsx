import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  number: number;
}

const RoundNumber: FC<Props> = ({ number }) => {
  const { t } = useTranslation();

  return <h1 className="round-content__h1">{t('Round')} {number}</h1>;
};

export default RoundNumber;
