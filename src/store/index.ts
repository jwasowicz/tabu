import { combineReducers } from "@reduxjs/toolkit";
import gameSettingsReducer from "../reducers/gameSettingsReducer";
import timerSettingsReducer from "../reducers/timerSettingsReducer";
import roundTimeReducer from "../reducers/roundTimeReducer";
import pauseSettingsReducer from "../reducers/pauseSettingsReducer";

export const appReducer = combineReducers({
    gameSettings: gameSettingsReducer,
    timerSettings: timerSettingsReducer,
    roundTime: roundTimeReducer,
    pauseSettings: pauseSettingsReducer
})