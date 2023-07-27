import { RefObject, useEffect, useState } from "react";
import { useHelper } from "./useHelper";
import { setTimerSettings } from "../store/actions";
import { settingsHelper } from "../utils/settingsHelper";

export const useTimerSettings = (ulRef: RefObject<HTMLUListElement>) => {
  const { dispatch, timerSettings, filterActiveElement } = useHelper();
  const [timer, setTimer] = useState({ ...timerSettings });

  useEffect(() => {
    const { categories, header, activeElementText, limitHeader } =
      settingsHelper(ulRef, filterActiveElement);

    if (!categories.includes(header!)) {
      setTimer((prevSettings) => ({
        ...prevSettings,
        limitHeader: limitHeader!,
        limitFooter: activeElementText!,
      }));
    }
    dispatch(setTimerSettings(timer));
  }, [filterActiveElement, ulRef, dispatch, timer]);
};
