import { FC, MouseEvent, Dispatch, SetStateAction, useRef } from "react";
import { useSetActive } from "../../hooks/useSetActive";
import { removeActiveClass } from "../../utils/removeActiveClass";
import { secondsToMinutes } from "../../utils/timeConvert";
import { useSaveSettings } from "../../hooks/useSaveSettings";
import { useHelper } from "../../hooks/useHelper";
import { setRoundTime } from "../../store/actions";
import { settingsHelper } from "../../utils/settingsHelper";

interface SettingsValueProps {
  setCategory?: Dispatch<SetStateAction<string>>;
  elements: (string | number)[];
  limitValues?: boolean;
  active?: string;
  headerName?: string;
}

const SettingsValue: FC<SettingsValueProps> = ({
  elements,
  setCategory,
  limitValues,
  active: activeElement,
  headerName,
}): JSX.Element => {
  const listRef = useRef<HTMLUListElement>(null);

  const { dispatch, roundTime, filterActiveElement } = useHelper();

  const { header, liElements: children } = settingsHelper(
    listRef,
    filterActiveElement!
  );

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const categories = ["Rounds", "Points", "None"];
    const clickedElement = e.currentTarget;

    if (categories.includes(clickedElement.textContent ?? "") && setCategory) {
      setCategory(clickedElement.textContent ?? "");
    }

    if (header === "Round Time") {
      dispatch(
        setRoundTime({
          ...roundTime,
          "Round Time": clickedElement.textContent!,
        })
      );
    } else if (header === "Skip Limit") {
      dispatch(
        setRoundTime({
          ...roundTime,
          "Skip Limit": clickedElement.textContent!,
        })
      );
    }

    removeActiveClass(children);

    clickedElement.classList.add("active");
  };

  useSetActive(activeElement, listRef);
  useSaveSettings(listRef, activeElement!);

  return (
    <ul ref={listRef} className={limitValues ? "limit-values" : ""}>
      {elements.map((element, index) => (
        <li
          onClick={(e) => handleClick(e)}
          style={{ transform: element === "∞" ? "scale(1.7)" : "" }}
          key={index}
        >
          {headerName === "Round Time"
            ? secondsToMinutes(Number(element), false)
            : element}
        </li>
      ))}
    </ul>
  );
};

export default SettingsValue;
