import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../components/SettingsScreen/SettingsButton";
import {
  GameSettingsAction,
  Settings,
  RoundTimeAction,
  RoundTimeRoot,
  RoundTime,
  PauseSettingsRoot,
  PauseSettings,
  PauseSettingsAction,
  CounterRoot,
  Counter,
  CounterAction,
  StatsRoot,
  Stats,
  StatsAction,
} from "../store/types";
import { Dispatch } from "@reduxjs/toolkit";
import { useCallback } from "react";

export type DispatchActions = Dispatch<
  | GameSettingsAction
  | RoundTimeAction
  | PauseSettingsAction
  | CounterAction
  | StatsAction
>;

export interface HelperResult {
  gameSettings: Settings;
  dispatch: DispatchActions;
  roundTime: RoundTime;
  pauseSettings: PauseSettings;
  counter: Counter;
  stats: Stats;
  filterActiveElement?: (liList: Element[]) => Element | undefined;
}

export const useHelper = (): HelperResult => {
  const dispatch = useDispatch();
  const gameSettings = useSelector((state: RootState) => state.gameSettings);
  const roundTime = useSelector((state: RoundTimeRoot) => state.roundTime);
  const pauseSettings = useSelector(
    (state: PauseSettingsRoot) => state.pauseSettings.pauseSettings
  );
  const counter = useSelector((state: CounterRoot) => state.counter.counters);
  const stats = useSelector((state: StatsRoot) => state.stats.stats);

  const filterActiveElement = useCallback((liList: Element[]) => {
    return liList.find((el) => el.classList.contains("active"));
  }, []);

  return {
    dispatch,
    gameSettings,
    roundTime,
    pauseSettings,
    counter,
    stats,
    filterActiveElement,
  };
};
