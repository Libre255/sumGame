import React from "react";
import { ShotAnimationType } from "../Hooks/useControlMovements";

interface Props {
  shotAnimation: ShotAnimationType;
  selectedNr: number;
  bottomBoxPosition: number;
}

const ShotBoxAnimation: React.FC<Props> = ({
  shotAnimation,
  selectedNr,
  bottomBoxPosition,
}) => {
  return (
    <div
      id="Animation_BoxContainer"
      className="testBox GlobalStyleNrs"
      style={{ ...shotAnimation, gridColumn: bottomBoxPosition }}
    >
      {selectedNr}
    </div>
  );
};

export default ShotBoxAnimation;
