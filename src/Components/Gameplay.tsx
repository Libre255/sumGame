import React from "react";
import ControlBoxesGrid from "./ControlBoxesGrid";
import useControlNr from "../Hooks/useControlNr";
import useControlMovements from "../Hooks/useControlMovements";
import OneTopBox from "./OneTopBox";

const Gameplay: React.FC = () => {
  const {
    bottomBoxPosition,
    shotAnimation,
    readyToShot,
  } = useControlMovements();
  const { selectedNr, randomNr, TopBoxesArray } = useControlNr(
    bottomBoxPosition,
    readyToShot
  );

  return (
    <div id="GamePlayBox" className="testBox2 ">
      {TopBoxesArray.map((TopBox, index) => (
        <OneTopBox key={index} NrValue={TopBox} />
      ))}
      <div
        className="testBox GlobalStyleNrs"
        style={{ ...shotAnimation, gridColumn: bottomBoxPosition }}
      >
        {selectedNr}
      </div>
      <ControlBoxesGrid
        useControl={[selectedNr!, randomNr, bottomBoxPosition]}
      />
    </div>
  );
};

export default Gameplay;
