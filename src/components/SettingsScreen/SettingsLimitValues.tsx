import { useState, FC } from "react";
import SettingsValue from "./SettingsValue";
import { useRender } from "../../hooks/useRender";

interface SettingsLimitValuesI {
  elements: string[] | number[];
  active: string | undefined;
}

const SettingsLimitValues: FC<SettingsLimitValuesI> = ({
  elements,
  active,
}) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <header>
        <SettingsValue
          active={active}
          limitValues={true}
          setCategory={setCategory}
          elements={elements}
        />
      </header>
      <footer>{useRender(category)}</footer>
    </>
  );
};

export default SettingsLimitValues;

//el.parentNode.parentNode.parentNode.childNodes[1]
