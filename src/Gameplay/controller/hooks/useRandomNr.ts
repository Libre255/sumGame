import { useEffect, useState, useMemo } from "react";
import useKeyPressed from "./useKeyPressed";
import shuffleArray from "../Methods/shuffleArray";
import { COMMANDS } from "../../gamePlayManagement/reducer/GamePlayReducer";
import { Action } from "../../gamePlayManagement/reducer/GamePlayeReducerTypes";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useRandomNr = (
  readyToShot: { itsReady2Shoot: boolean; gameStarted: boolean },
  dispatch: React.Dispatch<Action>
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
    if (readyToShot.itsReady2Shoot && readyToShot.gameStarted) {
      dispatch({ type: COMMANDS.UPDATE_CONTAINER_OF_ROWS });
      randomizeUpcomingBox();
    }
  }, [readyToShot, dispatch]);

  useEffect(() => {
    if (c_Key_Pressed && readyToShot.itsReady2Shoot) {
      randomizeUpcomingBox();
    }
  }, [c_Key_Pressed, readyToShot]);

  useEffect(() => {
    if (z_Key_Pressed && readyToShot.itsReady2Shoot) {
      dispatch({ type: COMMANDS.UPDATE_SELECTED_NR, selectedNr: randomNr });
    }
  }, [z_Key_Pressed, readyToShot, randomNr, dispatch]);

  return { randomNr };
};

export default useRandomNr;
