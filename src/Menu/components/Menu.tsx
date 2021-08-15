import React from "react";

const Menu: React.FC = () => {
  return (
    <div id="Menua">
      <div id="startGame" onClick={() => window.location.reload(true)}>
        <div>Start New Game!</div>
      </div>
      <div id="HowtoPlayContainer">
        <div id="How2PlayTitle">How to play</div>
        <div id="intructions">
          Use the keyboard arrows to move the selected number in the{" "}
          <span id="green">Green Box</span> on the bottom row.
          {<br />}
          Use <span id="controlzxcStyle">Z</span> to grab the number in the{" "}
          <span id="blue">Blue Box.</span>
          {<br />}
          Use <span id="controlzxcStyle">X</span> to "shot" the selected number
          to the top.
          {<br />}
          Use <span id="controlzxcStyle">C</span> to lock the number and add
          another box on top!
        </div>
      </div>
      <div id="Goal">
        <div id="goaltitle">The Goal of the game</div>
        The Goal is to get the highest total sum from the
        <span id="gold"> Golden Column</span> on the right!
        <br />
        You have 3 tries to change the number of the box.
        <br />
        Think carefully which sum will give you the highest score! :D
      </div>
    </div>
  );
};
export default Menu;
