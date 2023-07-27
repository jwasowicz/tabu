import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { FC } from "react";

interface Props {
  icon: OverridableComponent<SvgIconTypeMap>;
}

const Icon: FC<Props> = ({ icon }) => {
  const Icon = icon;

  return <Icon />;
};

export default Icon;
