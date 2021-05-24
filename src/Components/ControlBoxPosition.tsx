interface ControlBoxPositionProps {
  useControl: number[];
}

const ControlBoxPosition = ({ useControl }: ControlBoxPositionProps) => {
  const [selectedNr, bottomBoxPosition] = useControl;

  return (
    <div
      id="BoxContainer"
      style={{ gridColumn: bottomBoxPosition }}
      className="flexBoxCenter testBox2 GlobalStyleNrs"
    >
      {selectedNr}
    </div>
  );
};

export default ControlBoxPosition;
