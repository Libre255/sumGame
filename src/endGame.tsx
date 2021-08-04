import React from 'react'

interface Props {
  total:number;
}
const EndGame :React.FC<Props> = ({total}) => {

  return(
    <div id="endGameBox">
      Your total Sum score is:{total}
    </div>
  )
}

export default EndGame 