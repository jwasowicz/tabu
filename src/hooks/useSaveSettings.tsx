import { Settings } from "../store/types";
import { RefObject, useEffect, useState } from "react";
import { useHelper } from "./useHelper";
import { updateGameSettings } from "../store/actions";
import { settingsHelper } from "../utils/settingsHelper";

interface Args {
  (ulRef: RefObject<HTMLUListElement>, activeElement: string): void;
}

export const useSaveSettings: Args = (ulRef) => {

  const { dispatch, gameSettings, filterActiveElement } = useHelper();
  const [settings, setSettings] = useState({ ...gameSettings });

  useEffect(() => {
    const { categories, header, activeElementText, limitHeader } =
      settingsHelper(ulRef, filterActiveElement);

    if (categories.includes(header!)) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [header as keyof Settings]: activeElementText,
      }));
    } else {
      setSettings((prevSettings: Settings) => ({
        ...prevSettings,
        limitHeader: limitHeader!,
        limitFooter: limitHeader === "None" ? "" : activeElementText!,
      }));
    }
    dispatch(updateGameSettings(settings));
  }, [filterActiveElement, ulRef, settings, dispatch]);
};