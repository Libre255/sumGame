interface upcomingBoxProps {
  randomNr: number;
}

const UpcomingBox = ({ randomNr }: upcomingBoxProps) => {
  return (
    <div
      id="UpcomingBoxesContainer"
      className="flexBoxCenter testBox2 GlobalStyleNrs"
      style={{ gridColumn: 6 }}
    >
      {randomNr}
    </div>
  );
};

export default UpcomingBox;
