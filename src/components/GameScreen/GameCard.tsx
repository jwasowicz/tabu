import { useHelper } from "../../hooks/useHelper";
import GameCategoriesList from "./GameCategoriesList";

const GameCard = () => {
  const { counter } = useHelper();

  const { isAnimationStarted, animation } = counter;

  return (
    <div className={`game-screen__card ${isAnimationStarted ? animation : ""}`}>
      <GameCategoriesList />
    </div>
  );
};

export default GameCard;
