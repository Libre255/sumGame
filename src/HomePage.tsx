import React from 'react'
import Menu from "./Menu/Menu";
import Gameplay from './Components/Gameplay';

const HomePage :React.FC = () => {

  return(
    <div id="HomePage" className="testBox">
       <Menu/>
       <Gameplay/>
    </div>
  )
}

export default HomePage 