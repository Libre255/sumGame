import { useEffect, useState } from "react";
import useKeyPressed from "./useKeyPressed";
import shuffleArray from "../Methods/shuffleArray"
const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useControlNr = () => {
  const [randomNr, setRandomNr] = useState<number>(
    upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
  );
  const [boxToTop, setBoxToTop] = useState<number | undefined>(undefined);
  const [selectedNr, setSelectedNr] = useState<number | undefined>(undefined);

  const z_Key_Pressed = useKeyPressed("z");
  const x_Key_Pressed = useKeyPressed("x");
  const c_Key_Pressed = useKeyPressed("c");
 
  useEffect(() => {
    function randomUpcomingBox() {
      const shuffleArr = shuffleArray(upComingBoxes)
      const grabRandomNr = shuffleArr[Math.floor(Math.random() * shuffleArr.length)];
      setRandomNr(grabRandomNr);
    }
    if (c_Key_Pressed) {
      randomUpcomingBox();
    }
  }, [c_Key_Pressed]);

  useEffect(() => {
    if (z_Key_Pressed) {
      setSelectedNr(randomNr);
    } else if (x_Key_Pressed) {
      setBoxToTop(selectedNr);
    }
  }, [z_Key_Pressed, x_Key_Pressed]);

  return {randomNr, selectedNr, boxToTop };
};

export default useControlNr;
