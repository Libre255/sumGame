import { useEffect, useState } from "react";
import useKeyPressed from "./useKeyPressed";
import shuffleArray from "../Methods/shuffleArray";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useControlNr = (position?: number) => {
  const [randomNr, setRandomNr] = useState<number>(
    upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
  );
  const [selectedNr, setSelectedNr] = useState<number | undefined>(undefined);
  const [TopBoxesArray, setTopBoxesArray] = useState<
    [number, number, number, number, number]
  >([0, 0, 0, 0, 0]);
  const [boxToTop, setBoxToTop] = useState<number>();

  const z_Key_Pressed = useKeyPressed("z");
  const x_Key_Pressed = useKeyPressed("x");
  const c_Key_Pressed = useKeyPressed("c");
  
  useEffect(() => {
    if (c_Key_Pressed || x_Key_Pressed) {
      randomizeUpcomingBox();
    }
    function randomizeUpcomingBox() {
      const shuffleArr = shuffleArray(upComingBoxes);
      const grabRandomNr =
        shuffleArr[Math.floor(Math.random() * shuffleArr.length)];
      setRandomNr(grabRandomNr);
    }
  }, [c_Key_Pressed, x_Key_Pressed]);

  useEffect(() => {
    if (z_Key_Pressed) {
      setSelectedNr(randomNr);
    } else if (x_Key_Pressed) {
      setBoxToTop(selectedNr);
      setTopBoxesArray((pv) => {
        if (selectedNr === undefined) {
          return pv;
        }
        pv[position! - 1] = selectedNr;
        return pv;
      });
    }
  }, [z_Key_Pressed, x_Key_Pressed]);

  return { randomNr, selectedNr, boxToTop, TopBoxesArray };
};

export default useControlNr;
