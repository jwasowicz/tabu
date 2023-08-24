import { RoundTime, Settings } from "../store/types";

export type Result = {
  [key: string]: string;
};

type SettingsType = Settings | RoundTime;

export const filterSettings = (settings: SettingsType) => {
  const filteredSettings = Object.entries(settings).filter(
    (el) => typeof el[1] !== "object"
  );

  const result = filteredSettings.reduce((acc: Result, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return result;
};
