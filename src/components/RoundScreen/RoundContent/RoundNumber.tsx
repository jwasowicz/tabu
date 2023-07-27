import { FC } from "react";

interface Props {
    number: number;
}

const RoundNumber: FC<Props> = ({number}) => {
  return (
    <h1 className="round-content__h1">Round {number}</h1>
  )
}

export default RoundNumber