import React from "react";

interface props {
  boxValue: number;
}
const Box: React.FC<props> = ({ boxValue }: props) => (
  <div className="Box testBox GlobalStyleNrs">{boxValue}</div>
);

export default Box;
