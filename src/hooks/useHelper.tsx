import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../components/SettingsScreen/SettingsButton";
import { GameSettingsAction, TimerSettingsAction, Settings, TimerSettings, TimerRoot, RoundTimeAction, RoundTimeRoot, RoundTime, PauseSettingsRoot, PauseSettings, PauseSettingsAction } from "../store/types";
import { Dispatch } from "@reduxjs/toolkit";
import { useCallback } from "react";

export type DispatchActions = Dispatch<GameSettingsAction | TimerSettingsAction | RoundTimeAction | PauseSettingsAction>;

interface HelperResult {

    gameSettings: Settings;
    timerSettings: TimerSettings;
    dispatch: DispatchActions;
    roundTime: RoundTime;
    pauseSettings: PauseSettings;
    filterActiveElement: (liList: Element[]) => Element | undefined
}



export const useHelper = (): HelperResult => {
  const dispatch = useDispatch();
  const gameSettings = useSelector((state: RootState) => state.gameSettings);
  const timerSettings = useSelector((state: TimerRoot) => state.timerSettings);
  const roundTime = useSelector((state: RoundTimeRoot) => state.roundTime);
  const pauseSettings = useSelector((state: PauseSettingsRoot) => state.pauseSettings.pauseSettings)


  const filterActiveElement = useCallback((liList: Element[]) => {
    return liList.find((el) => el.classList.contains("active"));
  }, []);



  return { dispatch, gameSettings, timerSettings, roundTime, pauseSettings, filterActiveElement};
};
