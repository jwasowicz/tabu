import { OptionsSettings, OptionsSettingsAction } from "../store/types";

export interface OptionsState {
  optionsSettings: OptionsSettings;
}

const initialState: OptionsState = {
  optionsSettings: {
    clickedIcon: false,
    iconType: '',
    animationOptionStart: false,
    soundsOptionChecked: true,
    notificationsOptionChecked: true,
    cardsLanguage: "GB",
    interfaceLanguage: "GB",
  },

};

export const optionsSettingsReducer = (
  state: OptionsState = initialState,
  action: OptionsSettingsAction
): OptionsState => {
  switch (action.type) {
    case "SET_OPTIONS_SETTINGS":
      return {
        ...state,
        optionsSettings: {
          ...state.optionsSettings,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default optionsSettingsReducer;
