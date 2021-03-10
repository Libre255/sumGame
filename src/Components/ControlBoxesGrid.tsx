import ControlCubePosition from "./ControlCubePosition";
import UpcomingBoxes from "./UpcomingBoxes";

interface ControlBoxesGridProps {
  useControl: number[];
}

const ControlBoxesGrid = ({ useControl }: ControlBoxesGridProps) => {
  const [selectedBox, randomBox] = useControl;

  return (
    <div id="controlBoxesGrid">
      <ControlCubePosition selectedBox={selectedBox} />
      <UpcomingBoxes randomBox={randomBox} />
    </div>
  );
};

export default ControlBoxesGrid;
