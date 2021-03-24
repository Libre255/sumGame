import ControlCubePosition from "./ControlCubePosition";
import UpcomingBoxes from "./UpcomingBoxes";

interface ControlBoxesGridProps {
  useControl: number[];
}

const ControlBoxesGrid = ({ useControl }: ControlBoxesGridProps) => {
  const [selectedNr, randomNr, bottomBoxPosition] = useControl;

  return (
    <div id="controlBoxesGrid">
      <ControlCubePosition useControl={[selectedNr, bottomBoxPosition]} />
      <UpcomingBoxes randomNr={randomNr} />
    </div>
  );
};

export default ControlBoxesGrid;
