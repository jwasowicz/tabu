import { ReactNode } from "react";

import SettingsValue from "../components/SettingsScreen/SettingsValue";

interface RenderValuesArgs {
  (category: string): ReactNode;
}

export const useRender: RenderValuesArgs = (category) => {
  if (!category && category !== "None") {
    return <SettingsValue elements={[10, 20, 30, 50, 100]} />;
  }

  switch (category) {
    case "Rounds":
      return <SettingsValue elements={[2, 4, 6, 8, 10]} />;
    case "Points":
      return <SettingsValue elements={[10, 20, 30, 50, 100]} />;
    default:
      return;
  }
};
