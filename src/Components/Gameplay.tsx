import React from "react";
import ControlBoxesGrid from "./ControlBoxesGrid";
import useControlNr from "../Hooks/useControlNr";
import useControlMovements from '../Hooks/useControlMovements';

const Gameplay: React.FC = () => {
  const { selectedNr, randomNr, boxToTop} = useControlNr();
  const {bottomBoxPosition, shotAnimation} = useControlMovements()
  
  return (
    <div id="GamePlayBox" className="testBox2 ">
      <div className="testBox GlobalStyleNrs" style={shotAnimation}>
        {boxToTop}
      </div>
      <ControlBoxesGrid useControl={[selectedNr!, randomNr, bottomBoxPosition]} />
    </div>
  );
};

export default Gameplay;
