import React, {useEffect, useState} from 'react'
import useKeyPressed from '../Hooks/useKeyPressed'
const UpcomingBoxes :React.FC = () => {
 const [nextBox, setNextBox] = useState<number>(1)
 const z_Key_Pressed = useKeyPressed('z')
 const upComingBoxes = [1,2,3,4,5,6,7,8,9,10]//This can be remplaced with fetch from database

 useEffect(() => {
  function randomUpcomingBox() {
    for (let index = upComingBoxes.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random()* index);
      const temp = upComingBoxes[index]
      upComingBoxes[index] = upComingBoxes[j]
      upComingBoxes[j] = temp    
    }
    const grabRandomNr = upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
    setNextBox(grabRandomNr)
   }
   if(z_Key_Pressed){
     randomUpcomingBox()
   }
 }, [z_Key_Pressed])
 
  return(
    <div id="UpcomingBoxesContainer" className="flexBoxCenter testBox2" style={{gridColumn:6}}>
       <div id="UpcomingBoxes">{nextBox}</div>
    </div>
  )
}

export default UpcomingBoxes 