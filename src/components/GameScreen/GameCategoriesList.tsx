import GameCategory from "./GameCategory";
import dataGB from "../../api/categoriesGB.json";
import dataPL from "../../api/categoriesPL.json";
import { FC } from "react";
import { useHelper } from "../../hooks/useHelper";

const GameCategoriesList: FC = () => {
  const {
    counter: { randomIndex },
    options: {cardsLanguage}
  } = useHelper();

  const data = cardsLanguage === "PL" ? dataPL : dataGB;

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
