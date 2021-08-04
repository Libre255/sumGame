import { useEffect } from "react"
import { BoxProperties } from "../reducer/GamePlayeReducerTypes"

interface Props {
  containerOfRows:BoxProperties[][];
  setTotalSumScore:React.Dispatch<React.SetStateAction<{
    totalSum: number;
    gameEnded: boolean;
  }>>
};

const useCountTotalSum = ({containerOfRows, setTotalSumScore}:Props)=>{
  useEffect(() => {
    const allBoxesFilled3Times = containerOfRows.every(row => row.every(box => box.AmountTimesAdded === 3))
    const totalSum = containerOfRows.reduce((startValue, rowValue)=> {
     return startValue + rowValue.reduce((startNr, box)=> box.AmountTimesAdded === 3? startNr + box.value : startNr + 0, 0)
    }, 0)
    if(containerOfRows.length === 4){
      if(allBoxesFilled3Times){
        setTotalSumScore({totalSum:totalSum, gameEnded:true})
      }
    }
  }, [containerOfRows, setTotalSumScore])
}
export {useCountTotalSum}