interface upcomingBoxesProps {
  randomNr: number;
}

const UpcomingBoxes = ({ randomNr}: upcomingBoxesProps) => {
  return (
    <div
      id="UpcomingBoxesContainer"
      className="flexBoxCenter testBox2"
      style={{ gridColumn: 6 }}
    >
      <div id="UpcomingBoxes" className="GlobalStyleNrs">
        {randomNr}
      </div>
    </div>
  );
};

export default UpcomingBoxes;
