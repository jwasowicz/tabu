import { Counter, CounterAction } from "../store/types";

import data from "../api/categoriesGB.json";

const { mainCategories } = data;

export interface CounterState {
  counters: Counter;
}

const initialState: CounterState = {
  counters: {
    activeCounter: "red",
    isAnimationStarted: false,
    animation: "",
    redCounter: 0,
    blueCounter: 0,
    roundCounter: 1,
    redTeamCounter: 0,
    blueTeamCounter: 0,
    redSkipCounter: 0,
    blueSkipCounter: 0,
    disabledRed: false,
    disabledBlue: false,
    redCounterActive: false,
    resetSettings: false,
    randomIndex: Math.floor(Math.random() * mainCategories.length),
  },
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "UPDATE_COUNTER":
      return {
        ...state,
        counters: {
          ...state.counters,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default counterReducer;
