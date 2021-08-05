import React from "react";

interface props {
  boxValue: number;
  amountTimesAdded?: number;
  lockedNr?: boolean;
}
const Box: React.FC<props> = ({
  boxValue,
  amountTimesAdded,
  lockedNr,
}: props) => {
  if (boxValue === 0) {
    return (
      <div className="Box testBox GlobalStyleNrs" style={{ border: "0" }} />
    );
  } else {
    return (
      <div
        className="Box testBox GlobalStyleNrs"
        style={{ border: lockedNr ? "2px solid #790404" : "" }}
      >
        <div className="amountTimesAdded-Box">{amountTimesAdded}</div>
        {boxValue}
      </div>
    );
  }
};

export default Box;
