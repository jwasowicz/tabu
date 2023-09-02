import { FC, useState } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { useHelper } from "../../hooks/useHelper";
import { setOptionsSettings } from "../../store/actions";

interface StartIconProps {
  icon: OverridableComponent<SvgIconTypeMap>;
  type: string;
}

const StartIcon: FC<StartIconProps> = ({ icon, type }) => {
  const Icon = icon;

  const { options, dispatch } = useHelper();

  const [isRotate, setIsRotate] = useState(true);

  const handleClick = () => {
    setIsRotate(false);

    dispatch(
      setOptionsSettings({ ...options, clickedIcon: true, iconType: type })
    );
  };

  return (
    <div onClick={handleClick} className="icon-container__icon">
      <Icon className={`${(isRotate && type === "Settings") && "rotate"}`} />
    </div>
  );
};

export default StartIcon;
