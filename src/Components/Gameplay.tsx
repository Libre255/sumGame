import React, { useReducer } from "react";
import ControlBoxesGrid from "./ControlBoxesGrid";
import useControlNr from "../Hooks/useControlNr";
import useControlMovements from "../Hooks/useControlMovements";
import OneTopBox from "./OneTopBox";
import { initialState, reducer } from "../Methods/GamePlayReducer";

const Gameplay: React.FC = () => {
  const [
    { selectedNr, TopBoxesArray, bottomBoxPosition },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { shotAnimation, readyToShot } = useControlMovements(dispatch);
  const { randomNr } = useControlNr(readyToShot, dispatch);

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
