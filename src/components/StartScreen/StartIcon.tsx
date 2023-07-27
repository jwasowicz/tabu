import { FC} from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface StartIconProps {
    icon: OverridableComponent<SvgIconTypeMap>
}


const StartIcon: FC<StartIconProps> = ({icon}) => {

    const Icon = icon;
  return (
    <div className="icon-container__icon">
      <Icon />
    </div>
  );
};


export default StartIcon;
