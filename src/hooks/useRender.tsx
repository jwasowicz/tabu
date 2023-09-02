import { ReactNode } from "react";

import SettingsValue from "../components/SettingsScreen/SettingsValue";
import { useTranslation } from "react-i18next";

interface RenderValuesArgs {
  (category: string): ReactNode;
}

export const useRender: RenderValuesArgs = (category) => {
  const { t } = useTranslation();

  if (!category && category !== t("None")) {
    return <SettingsValue elements={[10, 20, 30, 50, 100]} />;
  }

  switch (category) {
    case t("Rounds"):
      return <SettingsValue elements={[2, 4, 6, 8, 10]} />;
    case t("Points"):
      return <SettingsValue elements={[10, 20, 30, 50, 100]} />;
    default:
      return;
  }
};
