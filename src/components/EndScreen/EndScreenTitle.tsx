import { useHelper } from "../../hooks/useHelper";
import { checkWonTeam } from "../../utils/checkWonTeam";

const EndScreenTitle = () => {
  const {
    counter: { redCounter, blueCounter },
    stats: { redTimer, blueTimer },
  } = useHelper();
  const result = checkWonTeam({ redCounter, blueCounter, redTimer, blueTimer });

  return (
    <h1
      style={{
        color:
          result === "Red"
            ? "#E85155"
            : result === "Draw"
            ? "#999999"
            : "#50A8FD",
      }}
      className="end-screen__title"
    >
      {result} {`${result === "Red" || result === "Blue" ? "wins" : ""}`}
    </h1>
  );
};

export default EndScreenTitle;
