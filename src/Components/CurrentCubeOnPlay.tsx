import React, { useState, useEffect } from "react";
import useKeyPressed from "../Hooks/useKeyPressed";
const CurrentCubeOnPlay: React.FC = () => {
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
      console.log(gridColumnNr);
    }
  }, [rightkey]);
  return (
    <div
      style={{ gridColumn: gridColumnNr }}
      className="flexBoxCenter"
    >
      <div className="CurrentCubeOnPlay"></div>
    </div>
  );
};

export default CurrentCubeOnPlay;
