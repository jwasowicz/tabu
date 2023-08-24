import { FC } from "react";

interface Props {
  teamGuess: string;
}

const RoundTeamGuessText: FC<Props> = ({ teamGuess }) => {
  return (
    <div className="round-content__block-text">
      <h3>Guessing Team:</h3>
      <h1 className="round-content__teamGuessText">{teamGuess}</h1>
    </div>
  );
};

export default RoundTeamGuessText;
