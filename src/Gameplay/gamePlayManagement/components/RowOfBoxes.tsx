import React from 'react'
import { BoxProperties } from '../../reducer/GamePlayeReducerTypes'
import Box from './Box'

interface Props {
  containerOfRows:BoxProperties[][];
}

const RowOfBoxes :React.FC<Props> = ({containerOfRows}) => {
  return(
    <>
      {containerOfRows.map((row, index) => {
        if(row.length === 4){
          return ""
        }
        return<div key={index} className="RowStyle" style={{ gridRow: index + 1 }}>
          {row.map((box, index) => (
            <Box key={index} boxValue={box.value} amountTimesAdded={box.AmountTimesAdded} lockedNr={box.NrLocked}/>
          ))}
        </div>
      })} 
    </>
  )
}

export default RowOfBoxes 