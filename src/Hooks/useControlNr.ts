import { useEffect, useState, useMemo } from "react";
import useKeyPressed from "./useKeyPressed";
import shuffleArray from "../Methods/shuffleArray";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useControlNr = (bottomPosition?: number, readyToShot?: boolean) => {
  const [randomNr, setRandomNr] = useState<number>(
    upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
  );
  const [selectedNr, setSelectedNr] = useState<number | undefined>(undefined);
  const [TopBoxesArray, setTopBoxesArray] = useState<
    [number, number, number, number, number]
  >([0, 0, 0, 0, 0]);

  const z_Key_Pressed = useKeyPressed("z");
  const c_Key_Pressed = useKeyPressed("c");

  function randomizeUpcomingBox() {
    const shuffleArr = shuffleArray(upComingBoxes);
    const grabRandomNr =
      shuffleArr[Math.floor(Math.random() * shuffleArr.length)];
    setRandomNr(grabRandomNr);
  }

  useMemo(() => {
    if (readyToShot) {
      setTopBoxesArray((pv) => {
        if (selectedNr === undefined) {
          return pv;
        }
        pv[bottomPosition! - 1] = selectedNr;
        return pv;
      });
      return randomizeUpcomingBox();
    }
  }, [readyToShot]);

  useEffect(() => {
    if (c_Key_Pressed && readyToShot) {
      randomizeUpcomingBox();
    }
  }, [c_Key_Pressed, readyToShot]);

  useEffect(() => {
    
    if (z_Key_Pressed && readyToShot) {
      setSelectedNr(randomNr);
    }
  }, [z_Key_Pressed, readyToShot, randomNr])

  return { randomNr, selectedNr, TopBoxesArray };
};

export default useControlNr;
