import { Stats, StatsAction } from "../store/types";

export interface StatsState {
  stats: Stats;
}

const initialState: StatsState = {
  stats: {
    counterRedPlus: 0,
    counterRedMinus: 0,
    counterBluePlus: 0,
    counterBlueMinus: 0,
    redTimer: 0,
    blueTimer: 0,
    redTimesArr: [],
    blueTimesArr: [],
    helpTimer: 0,
    active: false,
  },
};

const statsReducer = (
  state: StatsState = initialState,
  action: StatsAction
): StatsState => {
  switch (action.type) {
    case "SET_STATS":
      return {
        ...state,
        stats: {
          ...state.stats,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default statsReducer;
