import React from "react";

interface props {
  boxValue: number;
  amountTimesAdded:number;
}
const Box: React.FC<props> = ({ boxValue, amountTimesAdded }: props) => (
  <div className="Box testBox GlobalStyleNrs">
    <div className="amountTimesAdded-Box">
      {amountTimesAdded}
    </div>
    {boxValue}
  </div>
);

export default Box;
