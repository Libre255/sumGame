import ControlBoxPosition from "./ControlBoxPosition";
import UpcomingBox from "./UpcomingBox";

interface ControllerProps {
  useControl: number[];
}

const Controller = ({ useControl }: ControllerProps) => {
  const [selectedNr, randomNr, bottomBoxPosition] = useControl;

  return (
    <div id="ControllerGrid">
      <ControlBoxPosition useControl={[selectedNr, bottomBoxPosition]} />
      <UpcomingBox randomNr={randomNr} />
    </div>
  );
};

export default Controller;
