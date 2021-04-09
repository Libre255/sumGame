import React from "react";

interface props {
  NrValue: number;
}
const OneTopBox: React.FC<props> = ({ NrValue }: props) => {
  return <div className="testBox GlobalStyleNrs">{NrValue}</div>;
};

export default OneTopBox;
