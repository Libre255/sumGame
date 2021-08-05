import React from "react";

const Menu: React.FC = () => {
  return (
    <div id="Menua">
      <div id="startGame" onClick={() => window.location.reload(true)}>
        Start New Game!
      </div>
      <div id="HowtoPlayContainer">
        <div id="How2PlayTitle">How to play</div>
        <span>
          Use the keyboard arrows to move the selected number in the{" "}
          <span id="gold">Gold Box</span> on the bottom.
          {<br />}
          Use <span id="controlzxcStyle">Z</span> to grab next number in the{" "}
          <span id="blue">Blue Box.</span>
          {<br />}
          Use <span id="controlzxcStyle">X</span> to "shot" the selected number
          to the top.
          {<br />}
          Use <span id="controlzxcStyle">C</span> to lock the number and add
          another box on top!
        </span>
      </div>
      <div id="Goal">
        <div id="goaltitle">The Goal of the game</div>
        The Goal is to get the highest total sum from the{" "}
        <span id="gold">Golden Columns</span> on the right!
        <br />
        You have 3 tries to change the number of the box.
        <br />
        Think carefully which sum will give you the highest score! :D
      </div>
    </div>
  );
};
export default Menu;
