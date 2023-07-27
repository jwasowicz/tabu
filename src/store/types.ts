import { Action } from "@reduxjs/toolkit";
import { PauseState } from "../reducers/pauseSettingsReducer";

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   Settings
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface Settings {
  "Skip Limit": string;
  limitHeader: string;
  limitFooter: string;
}

export interface UpdateGameSettingsAction
  extends Action<"UPDATE_GAME_SETTINGS"> {
  payload: Settings;
}
export type GameSettingsAction = UpdateGameSettingsAction;

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   TimerSettings
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface TimerSettings {
  limitHeader: string;
  limitFooter: string;
}

export interface UpdateTimerSettingsAction
  extends Action<"SET_TIMER_SETTINGS"> {
  payload: TimerSettings;
}

export type TimerSettingsAction = UpdateTimerSettingsAction;

export type TimerRoot = {
  timerSettings: TimerSettings;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~
   RoundTime
   ~~~~~~~~~~~~~~~~~~~~~~~~
*/

export interface RoundTime {
  "Round Time": string;
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
}

export interface UpdatePauseSettingsAction
  extends Action<"SET_PAUSE_SETTINGS"> {
  payload: PauseSettings;
}

export type PauseSettingsAction = UpdatePauseSettingsAction;

export type PauseSettingsRoot = {
    pauseSettings: PauseState
  };

/* export interface TimerSettings {
  limitHeader: string;
  limitFooter: string;
}

export interface UpdateTimerSettingsAction
  extends Action<"SET_TIMER_SETTINGS"> {
  payload: TimerSettings;
}

export type TimerSettingsAction = UpdateTimerSettingsAction;

export type TimerRoot = {
  timerSettings: TimerSettings;
}; */
