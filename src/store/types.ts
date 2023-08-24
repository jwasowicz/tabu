import { Action } from "@reduxjs/toolkit";
import { PauseState } from "../reducers/pauseSettingsReducer";
import { CounterState } from "../reducers/counterReducer";
import { StatsState } from "../reducers/statsReducers";

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   Settings
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface Settings {
  limitHeader: string;
  limitFooter: string;
}

export interface UpdateGameSettingsAction
  extends Action<"UPDATE_GAME_SETTINGS"> {
  payload: Settings;
}
export type GameSettingsAction = UpdateGameSettingsAction;

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   RoundTime
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface RoundTime {
  "Round Time": string;
  "Skip Limit": string;
}

export interface UpdateRoundTimeAction extends Action<"SET_ROUND_TIME"> {
  payload: RoundTime;
}

export type RoundTimeAction = UpdateRoundTimeAction;

export type RoundTimeRoot = {
  roundTime: RoundTime;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   PauseSettings
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface PauseSettings {
  gamePause: boolean;
  openedPopup: boolean;
  openedGameScreen: boolean;
  animationStart: boolean;
  location: string;
}

export interface UpdatePauseSettingsAction
  extends Action<"SET_PAUSE_SETTINGS"> {
  payload: PauseSettings;
}

export type PauseSettingsAction = UpdatePauseSettingsAction;

export type PauseSettingsRoot = {
  pauseSettings: PauseState;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   Counter
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface Counter {
  activeCounter: string;
  isAnimationStarted: boolean;
  animation: string;
  redCounter: number;
  blueCounter: number;
  roundCounter: number;
  blueTeamCounter: number;
  redTeamCounter: number;
  redSkipCounter: number;
  blueSkipCounter: number;
  disabledRed: boolean;
  disabledBlue: boolean;
  redCounterActive: boolean;
  resetSettings: boolean;
  randomIndex: number;
}

export interface UpdateCounterAction extends Action<"UPDATE_COUNTER"> {
  payload: Counter;
}

export type CounterAction = UpdateCounterAction;

export type CounterRoot = {
  counter: CounterState;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   Stats
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface Stats {
  counterRedPlus: number;
  counterRedMinus: number;
  counterBluePlus: number;
  counterBlueMinus: number;
  redTimer: number;
  blueTimer: number;
  redTimesArr: string[];
  blueTimesArr: string[];
  helpTimer: number;
  active: boolean;
}

export interface UpdateStatsAction extends Action<"SET_STATS"> {
  payload: Stats;
}

export type StatsAction = UpdateStatsAction;

export type StatsRoot = {
  stats: StatsState;
};
