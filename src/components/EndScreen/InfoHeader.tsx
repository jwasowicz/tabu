import { FC } from "react";

interface Props {
  infoHeader: string;
}

const InfoHeader: FC<Props> = ({ infoHeader }) => {
  return <h3 className="info-container__header">{infoHeader}</h3>;
};

export default InfoHeader;
