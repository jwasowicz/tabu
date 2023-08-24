import { FC } from "react";
import { useHelper } from "../../../hooks/useHelper";

interface Props {
  team: string;
}

const RoundPoint: FC<Props> = ({ team }) => {
  const {
    counter: { redCounter, blueCounter },
  } = useHelper();

  return (
    <h1
      style={{ color: team === "red" ? "#E85155" : "#50A8FD" }}
      className="round_section-top__h1"
    >
      {team === "red" ? redCounter : blueCounter}
    </h1>
  );
};

export default RoundPoint;
