import { RefObject, useEffect, useCallback } from "react";

interface Args {
  (textElements: string | undefined, ulRef: RefObject<HTMLUListElement>): void;
}

export const useSetActive: Args = (activeElement, ulRef) => {
  const filterElement = useCallback(
    (liElements: Element[]) => {
      return liElements.filter((li) => li.textContent === activeElement);
    },
    [activeElement]
  );

  useEffect(() => {
    const liElements = Array.from(ulRef.current?.children || []);

    const filteredElement = filterElement(liElements);

    if (filteredElement.length > 0 && filteredElement) {
      filteredElement.forEach((element) => element.classList.add("active"));
    } else {
      liElements[2].classList.add("active");
    }
  }, [ulRef, filterElement]);
};
