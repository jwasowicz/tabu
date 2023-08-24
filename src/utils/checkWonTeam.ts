interface Args {
  redCounter: number;
  blueCounter: number;
  redTimer: number;
  blueTimer: number;
}

export const checkWonTeam = ({
  redCounter,
  blueCounter,
  redTimer,
  blueTimer,
}: Args) => {
  if (redCounter === blueCounter) {
    if (redTimer === blueTimer) {
      return "Draw";
    } else if (redTimer > blueTimer) {
      return "Blue";
    } else if (blueTimer > redTimer) {
      return "Red";
    }
  } else if (redCounter > blueCounter) {
    return "Red";
  } else if (blueCounter > redCounter) {
    return "Blue";
  }
};
