import React, { useReducer } from "react";
import useControlNr from "../Hooks/useControlNr";
import useControlMovements from "../Hooks/useControlMovements";
import Box from "./Box";
import { initialState, reducer } from "../Methods/GamePlayReducer";
import Controller from "./Controller";

const Gameplay: React.FC = () => {
  const [
    { selectedNr, containerOfRows, bottomBoxPosition },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { shotAnimation, readyToShot } = useControlMovements(dispatch);
  const { randomNr } = useControlNr(readyToShot, dispatch);

  return (
    <div id="GamePlayWindow" className="testBox2 ">
      {containerOfRows.map((row, index) => (
        <div key={index} className="RowStyle" style={{ gridRow: index + 1 }}>
          {row.map((box, index) => (
            <Box key={index} boxValue={box.value} />
          ))}
        </div>
      ))}
      <div
        id="Animation_BoxContainer"
        className="testBox GlobalStyleNrs"
        style={{ ...shotAnimation, gridColumn: bottomBoxPosition }}
      >
        {selectedNr}
      </div>
      <Controller useControl={[selectedNr, randomNr, bottomBoxPosition]} />
    </div>
  );
};

export default Gameplay;
