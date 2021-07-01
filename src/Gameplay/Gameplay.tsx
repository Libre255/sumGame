import React, { useReducer } from "react";
import Box from "./gamePlayManagement/components/Box";
import ControllerContainer from "./controller/components/ControllerContainer";
import ShotBoxAnimation from "./boxShotAnimation/ShotBoxAnimation";
import useRandomNr from "./Hooks/useRandomNr";
import useControlMovements from "./Hooks/useControlMovements";
import { initialState, reducer } from "./reducer/GamePlayReducer";

const Gameplay: React.FC = () => {
  const [
    { selectedNr, containerOfRows, bottomBoxPosition },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { shotAnimation, readyToShot } = useControlMovements({ dispatch });
  const { randomNr } = useRandomNr({ readyToShot, dispatch });

  return (
    <div id="GamePlayWindow" className="testBox2 ">
      {containerOfRows.map((row, index) => (
        <div key={index} className="RowStyle" style={{ gridRow: index + 1 }}>
          {row.map((box, index) => (
            <Box key={index} boxValue={box.value} />
          ))}
        </div>
      ))}
      <ShotBoxAnimation
        selectedNr={selectedNr}
        shotAnimation={shotAnimation}
        bottomBoxPosition={bottomBoxPosition}
      />
      <ControllerContainer
        useControl={[selectedNr, randomNr, bottomBoxPosition]}
      />
    </div>
  );
};

export default Gameplay;
