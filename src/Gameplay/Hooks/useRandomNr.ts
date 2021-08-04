import { useEffect, useState, useMemo } from "react";
import useKeyPressed from "./useKeyPressed";
import { COMMANDS } from "../reducer/GamePlayReducer";
import { Props } from "../interfaces/randomNrTypes";
import { randomizeUpcomingBox } from "../Methods/randomizeUpcomingBox";

const useRandomNr = ({ dispatch, readyToShot }: Props) => {
  const [randomNr, setRandomNr] = useState<number>(
    randomizeUpcomingBox()
  );

  const z_Key_Pressed = useKeyPressed("z");

  useMemo(() => {
    if (readyToShot.itsReady2Shoot && readyToShot.gameStarted) {
      dispatch({ type: COMMANDS.UPDATE_CONTAINER_OF_ROWS });
      setRandomNr(randomizeUpcomingBox());
    }
  }, [readyToShot, dispatch]);

  useEffect(() => {
    if (z_Key_Pressed && readyToShot.itsReady2Shoot) {
      dispatch({ type: COMMANDS.UPDATE_SELECTED_NR, selectedNr: randomNr });
    }
  }, [z_Key_Pressed, readyToShot, randomNr, dispatch]);

  return { randomNr };
};

export default useRandomNr;
