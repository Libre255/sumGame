import React, { useState } from "react";
import Menu from "./Menu/components/Menu";
import Gameplay from "./Gameplay/Gameplay";
import EndGame from "./endGame";

const HomePage: React.FC = () => {
  const [totalSumScore, setTotalSumScore] = useState<{totalSum:number, gameEnded:boolean}>({totalSum:0, gameEnded:false})
  return (
    <div id="HomePage" className="testBox">
      <Menu />
      {
        totalSumScore.gameEnded ? <EndGame total={totalSumScore.totalSum}/> : <Gameplay setTotalSumScore={setTotalSumScore} />
      }
    </div>
  );
};

export default HomePage;
