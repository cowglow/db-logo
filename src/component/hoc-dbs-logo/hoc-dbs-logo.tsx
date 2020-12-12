import React from "react";
import DbsLogo, { DbsLogoProps } from "../dsb-logo/dbs-logo";
import { colors } from "../../lib/colors";

export const defaultColors = {
  colorLeft: "#10bf09",
  colorRight: "#decb28",
  colorBackground: "#000000",
  colorBorder: "#FFFFFF",
};

const HocDbsLogo: React.FC = () => {
  const [props, setProps] = React.useState<DbsLogoProps>(defaultColors);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProps({
        colorLeft: colors[Math.floor(Math.random() * colors.length)],
        colorRight: colors[Math.floor(Math.random() * colors.length)],
        colorBackground: colors[Math.floor(Math.random() * colors.length)],
        colorBorder: colors[Math.floor(Math.random() * colors.length)],
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DbsLogo
      colorLeft={props.colorLeft}
      colorRight={props.colorRight}
      colorBackground={props.colorBackground}
      colorBorder={props.colorBorder}
    />
  );
};

export default HocDbsLogo;
