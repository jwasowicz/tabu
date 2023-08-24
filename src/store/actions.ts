import {
  Settings,
  UpdateGameSettingsAction,
  UpdateRoundTimeAction,
  RoundTime,
  PauseSettings,
  UpdatePauseSettingsAction,
  Counter,
  UpdateCounterAction,
  Stats,
  UpdateStatsAction,
} from "./types";

export const updateGameSettings = (
  settings: Settings
): UpdateGameSettingsAction => {
  return {
    type: "UPDATE_GAME_SETTINGS",
    payload: settings,
  };
};

export const setRoundTime = (roundTime: RoundTime): UpdateRoundTimeAction => {
  return {
    type: "SET_ROUND_TIME",
    payload: roundTime,
  };
};

export const setPauseSettings = (
  pauseSettings: PauseSettings
): UpdatePauseSettingsAction => {
  return {
    type: "SET_PAUSE_SETTINGS",
    payload: pauseSettings,
  };
};

export const setCounter = (counter: Counter): UpdateCounterAction => {
  return {
    type: "UPDATE_COUNTER",
    payload: counter,
  };
};

export const setStats = (stats: Stats): UpdateStatsAction => {
  return {
    type: "SET_STATS",
    payload: stats,
  };
};
