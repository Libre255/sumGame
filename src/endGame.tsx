import React from "react";

interface Props {
  total: number;
}
const EndGame: React.FC<Props> = ({ total }) => {
  return <div id="endGameBox">
    <img src="https://media.giphy.com/media/xnowvAEfh0WFRhqJqM/giphy.gif" alt="game over img" />
    
    Your total Sum score is {total}!</div>;
};

export default EndGame;
