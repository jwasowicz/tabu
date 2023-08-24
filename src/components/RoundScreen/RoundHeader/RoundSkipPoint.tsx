import { FC } from "react";

interface Props {
  skipNumber: number;
}

const RoundSkipPoint: FC<Props> = ({ skipNumber }) => {
  return <h3 className="round_section-bottom__h3">{skipNumber}</h3>;
};

export default RoundSkipPoint;
