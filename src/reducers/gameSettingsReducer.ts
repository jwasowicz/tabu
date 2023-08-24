import { GameSettingsAction, Settings } from "../store/types";

interface State {
  gameSettings: Settings;
}

const initialState: State = {
  gameSettings: {
    limitHeader: "Points",
    limitFooter: "30",
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
