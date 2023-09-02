import { TFunction } from "i18next";


interface Args {
  redCounter: number;
  blueCounter: number;
  redTimer: number;
  blueTimer: number;
  t: TFunction<"translation", undefined>
}

export const checkWonTeam = ({
  redCounter,
  blueCounter,
  redTimer,
  blueTimer,
  t
}: Args) => {
  if (redCounter === blueCounter) {
    if (redTimer === blueTimer) {
      return t("Draw");
    } else if (redTimer > blueTimer) {
      return t("Blue");
    } else if (blueTimer > redTimer) {
      return t("Red");
    }
  } else if (redCounter > blueCounter) {
    return t("Red");
  } else if (blueCounter > redCounter) {
    return t("Blue");
  }
};
