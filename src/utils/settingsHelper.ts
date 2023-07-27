import { RefObject } from "react";

type ListRef = RefObject<HTMLUListElement>;

interface ReturnHelper {
    categories: string[];
    header: string | null | undefined;
    limitHeader: string | null | undefined;
    activeElementText: string | null | undefined
}

interface Args {
  (ulRef: ListRef, filterActiveElement: (liList: Element[]) => Element | undefined): ReturnHelper;
}

export const settingsHelper: Args = (ulRef, filterActiveElement) => {
  const liElements = Array.from(ulRef.current?.children || []);
  const categories = ["Skip Limit", "Round Time"];

  let header =
    ulRef.current?.parentNode?.parentNode?.childNodes[0].childNodes[0]
      .textContent;

  const limitHeader = filterActiveElement(
    Array.from(
      ulRef.current?.parentNode?.parentNode?.children[0]?.children[0]
        ?.children || []
    )
  )?.textContent;

  const activeElementText = filterActiveElement(liElements)?.textContent;

  return {categories, header, limitHeader, activeElementText}

};

