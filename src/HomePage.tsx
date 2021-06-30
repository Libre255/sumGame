import React from "react";
import Menu from "./Menu/components/Menu";
import Gameplay from "./Gameplay/Gameplay";

const HomePage: React.FC = () => {
  return (
    <div id="HomePage" className="testBox">
      <Menu />
      <Gameplay />
    </div>
  );
};

export default HomePage;
