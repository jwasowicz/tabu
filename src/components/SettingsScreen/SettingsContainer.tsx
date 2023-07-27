import { FC } from "react";
import SettingsValue from "./SettingsValue";
import SettingsLimitValues from "./SettingsLimitValues";

interface SettingsContainerProps {
  headerName: string;
  elements: string[] | number[];
  limitValues?: boolean;
  active?: string;
}

const SettingsContainer: FC<SettingsContainerProps> = ({
  headerName,
  elements,
  limitValues,
  active,
}) => {

    
  return (
    <div className="settings-container--option">
      <header className="settings-container--option__header">
        {headerName}
      </header>

      <footer className="settings-container--option__footer">
        {limitValues ? (
          <SettingsLimitValues active={active} elements={elements} />
        ) : (
          <SettingsValue headerName={headerName} active={active} elements={elements} />
        )}
      </footer>
    </div>
  );
};

export default SettingsContainer;
