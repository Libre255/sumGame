import React, { useState, useEffect } from "react";
import useKeyPressed from "../Hooks/useKeyPressed";

interface ControlCubePositionProps {
  selectedBox: number | undefined;
}

const ControlCubePosition = ({ selectedBox }: ControlCubePositionProps) => {
  const [gridColumnNr, setGridColumnNr] = useState(1);
  const rightkey = useKeyPressed("ArrowRight");
  const leftKey = useKeyPressed("ArrowLeft");

  useEffect(() => {
    if (leftKey) {
      setGridColumnNr((pv) => (pv === 1 ? pv : (pv -= 1)));
    }
  }, [leftKey]);
  useEffect(() => {
    if (rightkey) {
      setGridColumnNr((pv) => (pv === 5 ? pv : (pv += 1)));
    }
  }, [rightkey]);

  return (
    <div
      style={{ gridColumn: gridColumnNr }}
      className="flexBoxCenter testBox2"
    >
      <div id="CurrentCubeOnPlay" className="GlobalStyleNrs">
        {selectedBox}
      </div>
    </div>
  );
};

export default ControlCubePosition;
