import React from "react";

interface props {
  NrValue: number;
}
const OneTopBox: React.FC<props> = ({ NrValue }: props) => <div className="OneTopBox testBox GlobalStyleNrs">{NrValue}</div>;

export default OneTopBox;
