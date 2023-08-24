import { FC } from "react";

interface Props {
  headerName?: string;
  categoryName?: string;
}

const GameCategory: FC<Props> = ({ headerName, categoryName }) => {
  return (
    <li className={`game-screen__list-${headerName ? "header" : "element"}`}>
      {headerName ? headerName : categoryName}
    </li>
  );
};

export default GameCategory;
