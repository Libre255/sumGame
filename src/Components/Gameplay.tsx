import React from "react";
import ControlBoxesGrid from "./ControlBoxesGrid";
import useControlBox from "../Hooks/useControlBox";

const Gameplay: React.FC = () => {
  const { selectedBox, randomBox, boxToTop } = useControlBox();

  return (
    <div id="GamePlayBox" className="testBox2 ">
      <div className="testBox" style={{ gridColumn: 4 }}>
        {boxToTop}
      </div>
      <ControlBoxesGrid useControl={[selectedBox!, randomBox]} />
    </div>
  );
};

export default Gameplay;
