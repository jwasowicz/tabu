import { combineReducers } from "@reduxjs/toolkit";
import gameSettingsReducer from "../reducers/gameSettingsReducer";
import roundTimeReducer from "../reducers/roundTimeReducer";
import pauseSettingsReducer from "../reducers/pauseSettingsReducer";
import counterReducer from "../reducers/counterReducer";
import statsReducer from "../reducers/statsReducers";
import optionsSettingsReducer from "../reducers/optionsSettingsReducer";

export const appReducer = combineReducers({
  gameSettings: gameSettingsReducer,
  roundTime: roundTimeReducer,
  pauseSettings: pauseSettingsReducer,
  counter: counterReducer,
  stats: statsReducer,
  optionsSettings: optionsSettingsReducer
});
