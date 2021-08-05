import { useState, useEffect } from "react";
import useKeyPressed from "./useKeyPressed";
import { COMMANDS } from "../reducer/GamePlayReducer";
import {
  Props,
  ReadyToshotType,
  ShotAnimationType,
} from "../interfaces/controlMovementsTypes";

const useControlMovements = ({ dispatch, columnsVerticalIndexes, bottomBoxPosition }: Props) => {
  const [shotAnimation, setShotAnimation] = useState<ShotAnimationType>({
    gridRow: 4,
    display: "none",
  });
  const [readyToShot, setReadyToShot] = useState<ReadyToshotType>({
    itsReady2Shoot: true,
    gameStarted: false,
  });

  const rightkey = useKeyPressed("ArrowRight");
  const leftKey = useKeyPressed("ArrowLeft");
  const x_Key_Pressed = useKeyPressed("x");
  const c_Key_Pressed = useKeyPressed("c");

  useEffect(() => {
    if(c_Key_Pressed){//need to check if the next number is 0 if its then dont update else do it
      dispatch({type:COMMANDS.UPDATE_columnsVerticalIndexes})
    }
  }, [c_Key_Pressed, dispatch])
  
  useEffect(() => {
    if (leftKey) {
      dispatch({ type: COMMANDS.Left_BottomPosition });
    } else if (rightkey) {
      dispatch({ type: COMMANDS.Right_BottomPosition });
    }
  }, [leftKey, rightkey, dispatch]);

  useEffect(() => {
    const verticalGridPositionNr = (columnsVerticalIndexes[bottomBoxPosition - 1] + 2)
    if (x_Key_Pressed && !readyToShot.gameStarted) {
      setReadyToShot((pv) => ({ ...pv, gameStarted: true }));
    }

    if (x_Key_Pressed && readyToShot.itsReady2Shoot) {
      setReadyToShot((pv) => ({ ...pv, itsReady2Shoot: false }));
      setShotAnimation((pv) => ({ ...pv, display: "block" }));
      const animation = setInterval(() => {
        setShotAnimation(pv => {
          if(pv.gridRow > verticalGridPositionNr ){
            return {...pv, gridRow: pv.gridRow - 1}
          }else return pv
        })
      }, 100);

      return () => {
        setTimeout(() => {
          clearInterval(animation);
          setShotAnimation((pv) => ({ ...pv, gridRow: 4, display: "none" }));
          setReadyToShot((pv) => ({ ...pv, itsReady2Shoot: true }));
        }, shotAnimation.gridRow * 100);
      };
    }
  }, [x_Key_Pressed, readyToShot, bottomBoxPosition, columnsVerticalIndexes, shotAnimation]);

  return { shotAnimation, readyToShot };
};

export default useControlMovements;
