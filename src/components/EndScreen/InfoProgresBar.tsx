import { FC } from "react";

interface Props {
  team: string;
  width: string;
}

const InfoProgresBar: FC<Props> = ({ team, width }) => {
  return (
    <div className="info-container__progress-bar">
      <div
        style={{
          background: team === "red" ? "#E85155" : "#50A8FD",
          width: `${width}%`,
        }}
        className="info-container__progress"
      ></div>
    </div>
  );
};

export default InfoProgresBar;
