import { FadeLoader } from "react-spinners";

const EndScreenSpinners = () => {
  return (
    <div className="end-screen__spinners-container">
      <FadeLoader
        color="#e7e7e7"
        cssOverride={{
          position: "absolute",
          zIndex: 1,
          left: "50%",
          transform: "translate(-30%, -110%)",
          opacity: 0.4,
        }}
        height={1000}
        margin={100}
        radius={1}
        speedMultiplier={2}
        width={50}
      />

      <FadeLoader
        color="#e7e7e7"
        cssOverride={{
          position: "absolute",
          zIndex: 1,
          left: "50%",
          transform: "translate(15%, -95%) rotate(22.5deg)",
          opacity: 0.4,
        }}
        height={1000}
        margin={100}
        radius={1}
        speedMultiplier={2}
        width={50}
      />
    </div>
  );
};

export default EndScreenSpinners;
