import React from "react";

interface props {
  boxValue: number;
  amountTimesAdded?:number;
}
const Box: React.FC<props> = ({ boxValue, amountTimesAdded }: props) => {
  if(boxValue === 0){
    return <div className="Box testBox GlobalStyleNrs" style={{border:'0'}} /> 
  }else{
    return <div className="Box testBox GlobalStyleNrs">
              <div className="amountTimesAdded-Box">
                {amountTimesAdded}
              </div>
              {boxValue}
            </div>
  }
};

export default Box;
