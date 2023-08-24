import RoundNumber from "./RoundNumber";
import RoundStartButton from "./RoundStartButton";
import RoundTeamGuessText from "./RoundTeamGuessText";
import { useHelper } from "../../../hooks/useHelper";

const RoundContent = () => {
  const {
    counter: { roundCounter, activeCounter },
  } = useHelper();

  return (
    <div className="round-content">
      <RoundNumber number={roundCounter} />
      <RoundTeamGuessText teamGuess={activeCounter} />
      <RoundStartButton />
    </div>
  );
};

export default RoundContent;
