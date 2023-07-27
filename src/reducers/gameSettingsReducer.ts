import { GameSettingsAction, Settings } from "../store/types";

interface State {
  gameSettings: Settings;
}

const initialState: State = {
  gameSettings: {
    "Skip Limit": "",
    limitHeader: "",
    limitFooter: ""

  },
};

const gameSettingsReducer = (
  state: State = initialState,
  action: GameSettingsAction
): State => {
  switch (action.type) {
    case "UPDATE_GAME_SETTINGS":
      return {
        ...state,
          ...action.payload,
      };

    default:
      return state;
  }
};

export default gameSettingsReducer;
