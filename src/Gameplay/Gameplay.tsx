import React, { useReducer } from "react";
import ControllerContainer from "./controller/components/ControllerContainer";
import ShotBoxAnimation from "./boxShotAnimation/ShotBoxAnimation";
import useRandomNr from "./Hooks/useRandomNr";
import useControlMovements from "./Hooks/useControlMovements";
import { initialState, reducer } from "./reducer/GamePlayReducer";
import TheTotalSumBox from "./gamePlayManagement/components/TheTotalSumBox";
import RowOfBoxes from "./gamePlayManagement/components/RowOfBoxes";

const Gameplay: React.FC = () => {
  const [
    { selectedNr, containerOfRows, bottomBoxPosition, columnsVerticalIndexes },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { shotAnimation, readyToShot } = useControlMovements({ dispatch, columnsVerticalIndexes, bottomBoxPosition });
  const { randomNr } = useRandomNr({ readyToShot, dispatch });
  
  return (
    <div id="GamePlayWindow" className="testBox2 ">
      <RowOfBoxes containerOfRows={containerOfRows}/>
      <TheTotalSumBox containerOfRows={containerOfRows}/>
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
