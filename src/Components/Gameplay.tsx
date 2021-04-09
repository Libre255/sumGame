import React from "react";
import ControlBoxesGrid from "./ControlBoxesGrid";
import useControlNr from "../Hooks/useControlNr";
import useControlMovements from "../Hooks/useControlMovements";
import OneTopBox from "./OneTopBox";

const Gameplay: React.FC = () => {
  const { bottomBoxPosition, shotAnimation } = useControlMovements();
  const { selectedNr, randomNr, boxToTop, TopBoxesArray } = useControlNr(
    bottomBoxPosition
  );

  return (
    <div id="GamePlayBox" className="testBox2 ">
      {TopBoxesArray.map((TopBox, index) => (
        <OneTopBox key={index} NrValue={TopBox} />
      ))}
      <div className="testBox GlobalStyleNrs" style={shotAnimation}>
        {boxToTop}
      </div>
      <ControlBoxesGrid
        useControl={[selectedNr!, randomNr, bottomBoxPosition]}
      />
    </div>
  );
};

export default Gameplay;
