import { RoundTimeAction } from "../store/types";

interface State {
  "Round Time": string;
  "Skip Limit": string;
}

const initialState: State = {
  "Round Time": "2:00",
  "Skip Limit": "∞",
};

const roundTimeReducer = (
  state: State = initialState,
  action: RoundTimeAction
): State => {
  switch (action.type) {
    case "SET_ROUND_TIME":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default roundTimeReducer;
