import { FC } from "react";
import InfoText from "./InfoText";

interface Props {
  infoContent: string[];
  active?: boolean;
}

const InfoContent: FC<Props> = ({ infoContent, active }) => {
  return (
    <div
      style={{
        justifyContent: active ? "space-evenly" : "space-around",
        gap: active ? "1rem" : 0,
      }}
      className="info-container__content"
    >
      {infoContent.map((infoText, index) => (
        <InfoText key={index} infoText={infoText} />
      ))}
    </div>
  );
};

export default InfoContent;
