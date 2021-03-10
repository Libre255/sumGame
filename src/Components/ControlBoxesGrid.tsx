import React from "react";
import ControlCubePosition from "./ControlCubePosition";
import UpcomingBoxes from "./UpcomingBoxes";

const ControlBoxesGrid: React.FC = () => {
  return (
    <div id="controlBoxesGrid">
      <ControlCubePosition />
      <UpcomingBoxes/>
    </div>
  );
};

export default ControlBoxesGrid;
