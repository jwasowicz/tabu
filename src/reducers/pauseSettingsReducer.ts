import { PauseSettings, PauseSettingsAction } from "../store/types";

export interface PauseState {
  pauseSettings: PauseSettings;
}

const initialState: PauseState = {
  pauseSettings: {
    gamePause: false,
    openedPopup: false,
    openedGameScreen: false,
    animationStart: false,
    location: "",
  },

};

export const pauseSettingsReducer = (
  state: PauseState = initialState,
  action: PauseSettingsAction
): PauseState => {
  switch (action.type) {
    case "SET_PAUSE_SETTINGS":
      return {
        ...state,
        pauseSettings: {
          ...state.pauseSettings,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default pauseSettingsReducer;
