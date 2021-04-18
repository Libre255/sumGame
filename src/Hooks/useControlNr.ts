import { useEffect, useState, useMemo } from "react";
import useKeyPressed from "./useKeyPressed";
import shuffleArray from "../Methods/shuffleArray";
import { action, ACTIONS } from "../Methods/GamePlayReducer";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useControlNr = (
  readyToShot: boolean,
  dispatch: React.Dispatch<action>
) => {
  const [randomNr, setRandomNr] = useState<number>(
    upComingBoxes[Math.floor(Math.random() * upComingBoxes.length)]
  );

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
      dispatch({ type: ACTIONS.UPDATE_TOP_ARRAY });
      return randomizeUpcomingBox();
    }
  }, [readyToShot, dispatch]);

  useEffect(() => {
    if (c_Key_Pressed && readyToShot) {
      randomizeUpcomingBox();
    }
  }, [c_Key_Pressed, readyToShot]);

  useEffect(() => {
    if (z_Key_Pressed && readyToShot) {
      dispatch({ type: ACTIONS.UPDATE_SELECTED_NR, selectedNr: randomNr });
    }
  }, [z_Key_Pressed, readyToShot, randomNr, dispatch]);

  return { randomNr };
};

export default useControlNr;
