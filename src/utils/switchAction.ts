import { setCounter, setStats } from "../store/actions";
import { Counter, Stats } from "../store/types";

import dataGB from "../api/categoriesGB.json";
import dataPL from "../api/categoriesPL.json";
import { DispatchActions } from "../hooks/useHelper";
import { secondsToMinutes } from "./timeConvert";

interface Args {
  stats: Stats;
  counter: Counter;
  dispatch: DispatchActions;
  action?: string;
  cardsLanguage: string;
}

export const switchAction = ({
  stats,
  counter,
  dispatch,
  action,
  cardsLanguage,
}: Args) => {
  const { mainCategories: GB } = dataGB;
  const { mainCategories: PL } = dataPL;

  const randomIndex = Math.floor(
    Math.random() * (cardsLanguage === "PL" ? PL.length : GB.length)
  );

  const {
    counterBlueMinus,
    counterRedMinus,
    counterRedPlus,
    counterBluePlus,
    blueTimer,
    redTimer,
    redTimesArr,
    blueTimesArr,
  } = stats;

  const {
    redCounter,
    blueCounter,
    activeCounter,
    redTeamCounter,
    blueTeamCounter,
    redSkipCounter,
    blueSkipCounter,
  } = counter;

  switch (action) {
    case "increment":
      const newTimeArr = [
        ...(activeCounter === "blue" ? blueTimesArr : redTimesArr),
        secondsToMinutes(activeCounter === "blue" ? blueTimer : redTimer, true),
      ];

      dispatch(
        setStats({
          ...stats,
          [activeCounter === "blue" ? "counterBluePlus" : "counterRedPlus"]:
            (activeCounter === "blue" ? counterBluePlus : counterRedPlus) + 1,
          [activeCounter === "blue" ? "blueTimesArr" : "redTimesArr"]:
            newTimeArr,
        })
      );

      return dispatch(
        setCounter({
          ...counter,
          [activeCounter === "blue" ? "blueCounter" : "redCounter"]:
            (activeCounter === "blue" ? blueCounter : redCounter) + 1,
          [activeCounter === "blue" ? "blueTeamCounter" : "redTeamCounter"]:
            (activeCounter === "blue" ? blueTeamCounter : redTeamCounter) + 1,
          randomIndex: randomIndex,
        })
      );

    case "decrement":
      dispatch(
        setStats({
          ...stats,
          [activeCounter === "blue" ? "counterBlueMinus" : "counterRedMinus"]:
            (activeCounter === "blue" ? counterBlueMinus : counterRedMinus) + 1,
        })
      );

      return dispatch(
        setCounter({
          ...counter,
          [activeCounter === "blue" ? "blueCounter" : "redCounter"]:
            (activeCounter === "blue" ? blueCounter : redCounter) - 1,
          [activeCounter === "blue" ? "blueTeamCounter" : "redTeamCounter"]:
            (activeCounter === "blue" ? blueTeamCounter : redTeamCounter) - 1,
          randomIndex: randomIndex,
        })
      );

    case "skip":
      return dispatch(
        setCounter({
          ...counter,
          [activeCounter === "blue" ? "blueSkipCounter" : "redSkipCounter"]:
            (activeCounter === "blue" ? blueSkipCounter : redSkipCounter) + 1,
          randomIndex: randomIndex,
        })
      );

    default:
      return;
  }
};
