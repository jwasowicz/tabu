import GameCategory from "./GameCategory";
import data from "../../api/categories.json";
import { FC } from "react";
import { useHelper } from "../../hooks/useHelper";

const GameCategoriesList: FC = () => {
  const {
    counter: { randomIndex },
  } = useHelper();

  return (
    <ul className="game-screen__list">
      {Object.values(data).map((category, index) => (
        <GameCategory
          key={index}
          headerName={category[randomIndex].headerName}
        />
      ))}

      {Object.values(data).map((category) =>
        category[randomIndex].categories.map((category, index) => (
          <GameCategory key={index} categoryName={category} />
        ))
      )}
    </ul>
  );
};

export default GameCategoriesList;
