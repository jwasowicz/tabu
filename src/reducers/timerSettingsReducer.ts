import { TimerSettings, TimerSettingsAction } from "../store/types";

interface State {

  timerSettings: TimerSettings;

}

const initialState: State = {
  timerSettings: {
    limitHeader: '',
    limitFooter: '',
  }

};

const timerSettingsReducer = (
  state: State = initialState,
  action: TimerSettingsAction
): State => {
  switch (action.type) {
    case "SET_TIMER_SETTINGS":
      return {
        ...state,
          ...action.payload
        }
    default:
      return state;
  }
};

export default timerSettingsReducer;
