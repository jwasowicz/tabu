import EndScreenCardContainer from "./EndScreenCardContainer";

import "./styles.css";
import EndScreenSpinners from "./EndScreenSpinners";
import EndScreenButton from "./EndScreenButton";
import { checkWonTeam } from "../../utils/checkWonTeam";
import { useHelper } from "../../hooks/useHelper";

const EndScreen = () => {
  const {
    counter: { redCounter, blueCounter },
    stats: { redTimer, blueTimer },
  } = useHelper();
  const result = checkWonTeam({ redCounter, blueCounter, redTimer, blueTimer });

  return (
    <div
      style={{
        background:
          result === "Red"
            ? "#E85155"
            : result === "Draw"
            ? "#50A8FD"
            : "#50A8FD",
      }}
      className="end-screen__container"
    >
      {result === "Draw" && <div className="trapezoid-red"></div>}

      <EndScreenCardContainer />

      <EndScreenSpinners />

      <div className="end-screen__button-container">
        <EndScreenButton text="Game Over" />
        <EndScreenButton text="Rematch" />
      </div>
    </div>
  );
};

export default EndScreen;
