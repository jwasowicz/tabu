import { useEffect } from "react";
import { useHelper } from "./useHelper";
import { setCounter } from "../store/actions";

export const useHandleDisabled = () => {
  const { counter, roundTime, dispatch } = useHelper();

  const { blueSkipCounter, redSkipCounter } = counter;

  const skipLimit = Number(roundTime["Skip Limit"]);

  useEffect(() => {
    const copyCounter = { ...counter };

    if (redSkipCounter === skipLimit) {
      copyCounter.disabledRed = true;
      dispatch(setCounter(copyCounter));
    }

    if (blueSkipCounter === skipLimit) {
      copyCounter.disabledBlue = true;
      dispatch(setCounter(copyCounter));
    }

    if (skipLimit === 0) {
      copyCounter.disabledBlue = true;
      copyCounter.disabledRed = true;
      dispatch(setCounter(copyCounter));
    }
  }, [blueSkipCounter, skipLimit, redSkipCounter, dispatch]);
};
