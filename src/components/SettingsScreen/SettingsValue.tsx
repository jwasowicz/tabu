import {
  FC,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from "react";
import { useSetActive } from "../../hooks/useSetActive";
import { removeActiveClass } from "../../utils/removeActiveClass";
import { secondsToMinutes } from "../../utils/timeConvert";
import { useSaveSettings } from "../../hooks/useSaveSettings";
import { useTimerSettings } from "../../hooks/useTimerSettings";
import { useHelper } from "../../hooks/useHelper";
import { setRoundTime } from "../../store/actions";

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

  const { dispatch } = useHelper();

  const header =
    listRef.current?.parentNode?.parentNode?.childNodes[0].childNodes[0]
      .textContent;

  const children = Array.from(listRef.current?.children || []);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const categories = ["Rounds", "Points", "None"];
    const clickedElement = e.currentTarget;

    if (categories.includes(clickedElement.textContent ?? "") && setCategory) {
      setCategory(clickedElement.textContent ?? "");
    }

    if (header === "Round Time") {


      dispatch(setRoundTime({ "Round Time": clickedElement.textContent! }));
    }

    removeActiveClass(children);

    clickedElement.classList.add("active");
  };


  useSetActive(activeElement, listRef);
  useSaveSettings(listRef, activeElement!);
  useTimerSettings(listRef);

  return (
    <ul ref={listRef} className={limitValues ? "limit-values" : ""}>
      {elements.map((element, index) => (
        <li
          onClick={(e) => handleClick(e)}
          style={{ transform: element === "∞" ? "scale(1.7)" : "" }}
          key={index}
        >
          {headerName === "Round Time"
            ? secondsToMinutes(Number(element))
            : element}
        </li>
      ))}
    </ul>
  );
};

export default SettingsValue;
