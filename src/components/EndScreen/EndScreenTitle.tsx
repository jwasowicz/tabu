import { useHelper } from "../../hooks/useHelper";
import { checkWonTeam } from "../../utils/checkWonTeam";
import { useTranslation } from "react-i18next";
const EndScreenTitle = () => {
  const {
    counter: { redCounter, blueCounter },
    stats: { redTimer, blueTimer },
  } = useHelper();

  const { t } = useTranslation();


  const result = checkWonTeam({ redCounter, blueCounter, redTimer, blueTimer, t });

  return (
    <h1
      style={{
        color:
          result === t("Red")
            ? "#E85155"
            : result === t("Draw")
            ? "#999999"
            : "#50A8FD",
      }}
      className="end-screen__title"
    >
      {result} {`${result === t("Red") || result === t("Blue") ? t("wins") : ""}`}
    </h1>
  );
};

export default EndScreenTitle;
