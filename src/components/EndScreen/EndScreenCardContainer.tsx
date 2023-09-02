import { useHelper } from "../../hooks/useHelper";
import { secondsToMinutes, timeToSeconds } from "../../utils/timeConvert";
import EndScreenInfoContainer from "./EndScreenInfoContainer";
import EndScreenScore from "./EndScreenScore";
import EndScreenSkipContainer from "./EndScreenSkipContainer";
import EndScreenTitle from "./EndScreenTitle";
import { useTranslation } from "react-i18next";

const EndScreenCardContainer = () => {
  const {
    stats: {
      counterBlueMinus,
      counterBluePlus,
      counterRedMinus,
      counterRedPlus,
      redTimer,
      blueTimer,
      redTimesArr,
      blueTimesArr,
    },
  } = useHelper();

  const { t } = useTranslation();

  const calculateTimesAndReturnSmallest = (array: string[]) => {
    const calculatedArray = array
      .map(timeToSeconds)
      .map((currentValue, index, array) => {
        if (index === 0) {
          return currentValue;
        } else {
          return Math.abs(currentValue - array[index - 1]);
        }
      });

    return !calculatedArray.length
      ? "-"
      : secondsToMinutes(Math.min(...calculatedArray), true);
  };

  return (
    <div className="end-screen__card-container">
      <EndScreenTitle />
      <EndScreenScore />
      <EndScreenSkipContainer />
      <EndScreenInfoContainer
        infoHeader={t("Total time")}
        infoContent={[
          secondsToMinutes(redTimer, true),
          secondsToMinutes(blueTimer, true),
        ]}
      />
      <EndScreenInfoContainer
        infoHeader={t("Best time per card")}
        infoContent={[
          calculateTimesAndReturnSmallest(redTimesArr),
          calculateTimesAndReturnSmallest(blueTimesArr),
        ]}
      />
      <EndScreenInfoContainer
        active={true}
        infoHeader={t("Efficiency")}
        infoContent={[
          `${(isNaN(counterRedPlus / (counterRedPlus + counterRedMinus))
            ? 0
            : (counterRedPlus / (counterRedPlus + counterRedMinus)) * 100
          ).toFixed(2)}%`,
          `${(isNaN(counterBluePlus / (counterBluePlus + counterBlueMinus))
            ? 0
            : (counterBluePlus / (counterBluePlus + counterBlueMinus)) * 100
          ).toFixed(2)}%`,
        ]}
      />
    </div>
  );
};

export default EndScreenCardContainer;
