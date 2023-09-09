import { FC } from "react";
import InfoContent from "./InfoContent";
import InfoHeader from "./InfoHeader";
import InfoProgresBar from "./InfoProgresBar";
import { useHelper } from "../../hooks/useHelper";

interface Props {
  infoHeader: string;
  infoContent: string[];
  active?: boolean;
}

const EndScreenInfoContainer: FC<Props> = ({
  infoHeader,
  infoContent,
  active,
}) => {
  const {
    stats: {
      counterBlueMinus,
      counterBluePlus,
      counterRedMinus,
      counterRedPlus,
    },
  } = useHelper();

  return (
    <>
      <div
        style={{ marginBottom: active ? "0.4rem" : "1rem" }}
        className="end-screen__info-container"
      >
        <InfoHeader infoHeader={infoHeader} />
        <InfoContent active={active} infoContent={infoContent} />

        {active && (
        <div className="info-container__progress-container">
          <InfoProgresBar
            team="red"
            width={(isNaN(counterRedPlus / (counterRedPlus + counterRedMinus))
              ? 0
              : (counterRedPlus / (counterRedPlus + counterRedMinus)) * 100
            ).toFixed(2)}
          />
          <InfoProgresBar
            team="blue"
            width={(isNaN(
              counterBluePlus / (counterBluePlus + counterBlueMinus)
            )
              ? 0
              : (counterBluePlus / (counterBluePlus + counterBlueMinus)) * 100
            ).toFixed(2)}
          />
        </div>
      )}
      </div>
      
    </>
  );
};

export default EndScreenInfoContainer;
