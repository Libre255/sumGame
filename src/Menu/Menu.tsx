import React from "react";
import DesktopMainMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useWindowSize from "../Hooks/useWindowSize";

const MenuConfig: React.FC = () => {
  const windowSize = useWindowSize();

  if (windowSize.width! <= 375) {
    return <MobileMenu />;
  } else {
    return <DesktopMainMenu />;
  }
};
export default MenuConfig;
