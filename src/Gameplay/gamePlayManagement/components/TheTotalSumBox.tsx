import React from 'react'
import Box from './Box'
import { BoxProperties } from '../../reducer/GamePlayeReducerTypes'

interface Props {
  containerOfRows:BoxProperties[][];
}
const TheTotalSumBox :React.FC<Props> = ({containerOfRows}) => {

  return(
    <>
      {containerOfRows.map((row, index) => {
          const total = row.reduce((startNr:number, box:BoxProperties)=> box.AmountTimesAdded === 3? startNr + box.value : startNr + 0, 0)
          if(total === 0){
            return <div key={index} id="SumTheRow" style={{border:'0'}}/>
          }else{
            return <div key={index} id="SumTheRow"> 
                      <Box key={index} boxValue={total}/>
                    </div>
          }
          })
      }
    </>
  )
}

export default TheTotalSumBox 