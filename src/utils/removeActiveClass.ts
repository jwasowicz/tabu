export const removeActiveClass = (elements: Element[]) => {

  if (elements.length > 0 && elements) {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  }
};
