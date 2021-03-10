import { useEffect, useState } from "react";
import useKeyPressed from "./useKeyPressed";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useControlBox = () => {
  const [randomBox, setRandomBox] = useState<number>(
    upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
  );
  const [boxToTop, setBoxToTop] = useState<number | undefined>(undefined);
  const [selectedBox, setSelectedBox] = useState<number | undefined>(undefined);

  const z_Key_Pressed = useKeyPressed("z");
  const x_Key_Pressed = useKeyPressed("x");
  const c_Key_Pressed = useKeyPressed("c");

  useEffect(() => {
    function randomUpcomingBox() {
      for (let index = upComingBoxes.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * index);
        const temp = upComingBoxes[index];
        upComingBoxes[index] = upComingBoxes[j];
        upComingBoxes[j] = temp;
      }
      const grabRandomNr =
        upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)];
      setRandomBox(grabRandomNr);
    }
    if (c_Key_Pressed) {
      randomUpcomingBox();
    }
  }, [c_Key_Pressed]);

  useEffect(() => {
    if (z_Key_Pressed) {
      setSelectedBox(randomBox);
    } else if (x_Key_Pressed) {
      setBoxToTop(selectedBox);
    }
  }, [z_Key_Pressed, x_Key_Pressed]);

  return { randomBox, selectedBox, boxToTop };
};

export default useControlBox;
