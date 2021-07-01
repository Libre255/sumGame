import { useEffect, useState, useMemo } from "react";
import useKeyPressed from "./useKeyPressed";
import { COMMANDS } from "../reducer/GamePlayReducer";
import { Props } from "../interfaces/randomNrTypes";
import { randomizeUpcomingBox } from "../Methods/randomizeUpcomingBox";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //This can be remplaced with fetch from database

const useRandomNr = ({ dispatch, readyToShot }: Props) => {
  const [randomNr, setRandomNr] = useState<number>(
    randomizeUpcomingBox(upComingBoxes)
  );

  const z_Key_Pressed = useKeyPressed("z");
  const c_Key_Pressed = useKeyPressed("c");

  useMemo(() => {
    if (readyToShot.itsReady2Shoot && readyToShot.gameStarted) {
      dispatch({ type: COMMANDS.UPDATE_CONTAINER_OF_ROWS });
      setRandomNr(randomizeUpcomingBox(upComingBoxes));
    }
  }, [readyToShot, dispatch]);

  useEffect(() => {
    if (c_Key_Pressed && readyToShot.itsReady2Shoot) {
      setRandomNr(randomizeUpcomingBox(upComingBoxes));
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
