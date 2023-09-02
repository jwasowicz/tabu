import { Settings } from "../store/types";
import { RefObject, useEffect, useState } from "react";
import { useHelper } from "./useHelper";
import { updateGameSettings } from "../store/actions";
import { settingsHelper } from "../utils/settingsHelper";
import { useTranslation } from "react-i18next";

interface Args {
  (ulRef: RefObject<HTMLUListElement>, activeElement: string): void;
}

export const useSaveSettings: Args = (ulRef) => {
  const { dispatch, gameSettings, filterActiveElement } = useHelper();
  const [settings, setSettings] = useState({ ...gameSettings });
  const { t } = useTranslation();

  useEffect(() => {
    const { categories, header, activeElementText, limitHeader } =
      settingsHelper(ulRef, filterActiveElement!);

    if (!categories.includes(header!)) {
      setSettings((prevSettings: Settings) => ({
        ...prevSettings,
        limitHeader: limitHeader!,
        limitFooter: limitHeader === t("None") ? "" : activeElementText!,
      }));
    }
    dispatch(updateGameSettings(settings));
  }, [filterActiveElement, ulRef, settings, dispatch, t]);
};
