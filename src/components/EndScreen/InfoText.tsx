import { FC } from "react";

interface Props {
  infoText: string;
}

const InfoText: FC<Props> = ({ infoText }) => {
  return <h3 className="info-container__text">{infoText}</h3>;
};

export default InfoText;
