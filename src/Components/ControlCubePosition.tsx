interface ControlCubePositionProps {
  useControl: number[];
}

const ControlCubePosition = ({ useControl }: ControlCubePositionProps) => {
  const [selectedNr, bottomBoxPosition] = useControl
  
  return (
    <div
      style={{ gridColumn: bottomBoxPosition }}
      className="flexBoxCenter testBox2"
    >
      <div id="CurrentCubeOnPlay" className="GlobalStyleNrs">
        {selectedNr}
      </div>
    </div>
  );
};

export default ControlCubePosition;
