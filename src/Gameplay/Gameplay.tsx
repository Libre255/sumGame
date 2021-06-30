import React, { useReducer } from "react";
import useRandomNr from "./controller/hooks/useRandomNr";
import useControlMovements from "./controller/hooks/useControlMovements";
import Box from "./gamePlayManagement/components/Box";
import {
  initialState,
  reducer,
} from "./gamePlayManagement/reducer/GamePlayReducer";
import ControllerContainer from "./controller/components/ControllerContainer";

const Gameplay: React.FC = () => {
  const [
    { selectedNr, containerOfRows, bottomBoxPosition },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { shotAnimation, readyToShot } = useControlMovements(dispatch);
  const { randomNr } = useRandomNr(readyToShot, dispatch);

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
      <ControllerContainer
        useControl={[selectedNr, randomNr, bottomBoxPosition]}
      />
    </div>
  );
};

export default Gameplay;
