interface upcomingBoxesProps {
  randomBox: number;
}

const UpcomingBoxes = ({ randomBox }: upcomingBoxesProps) => {
  return (
    <div
      id="UpcomingBoxesContainer"
      className="flexBoxCenter testBox2"
      style={{ gridColumn: 6 }}
    >
      <div id="UpcomingBoxes" className="GlobalStyleNrs">
        {randomBox}
      </div>
    </div>
  );
};

export default UpcomingBoxes;
