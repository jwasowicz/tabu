import { UpdateTimerSettingsAction, Settings, UpdateGameSettingsAction, TimerSettings, UpdateRoundTimeAction, RoundTime, PauseSettings, UpdatePauseSettingsAction} from "./types";

export const updateGameSettings = (settings: Settings): UpdateGameSettingsAction => {


    return {
        type: "UPDATE_GAME_SETTINGS",
        payload: settings,
      };
}


export const setTimerSettings = (timerSettings: TimerSettings): UpdateTimerSettingsAction => {
  return {
    type: "SET_TIMER_SETTINGS",
    payload: timerSettings
  }
}

export const setRoundTime = (roundTime: RoundTime): UpdateRoundTimeAction => {
  return {
    type: 'SET_ROUND_TIME',
    payload: roundTime
  }
}

export const setPauseSettings = (pauseSettings: PauseSettings): UpdatePauseSettingsAction => {
  return {
    type: 'SET_PAUSE_SETTINGS',
    payload: pauseSettings
  }
}