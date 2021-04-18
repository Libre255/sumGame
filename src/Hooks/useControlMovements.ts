import { useState, useEffect } from "react";
import useKeyPressed from "./useKeyPressed";
import {action, ACTIONS} from '../Methods/GamePlayReducer'

const useControlMovements = (dispatch:React.Dispatch<action>) => {
  const [shotAnimation, setShotAnimation] = useState<{
    gridRow: number;
    display: string;
  }>({ gridRow: 5, display: "none" });
  const [readyToShot, setReadyToShot] = useState<boolean>(true);

  const rightkey = useKeyPressed("ArrowRight");
  const leftKey = useKeyPressed("ArrowLeft");
  const x_Key_Pressed = useKeyPressed("x");

  useEffect(() => {
    if (leftKey) {
      dispatch({type:ACTIONS.Left_BottomPosition})
    }else if (rightkey) {
      dispatch({type:ACTIONS.Right_BottomPosition})
    }
  }, [leftKey, rightkey,  dispatch]);

  useEffect(() => {
    let animationKeyFrame: number = 5;

    if (x_Key_Pressed && readyToShot) {
      setReadyToShot(false);
      setShotAnimation((pv) => ({ ...pv, display: "block" }));
      const animation = setInterval(() => {
        if (animationKeyFrame > 2) {
          animationKeyFrame--;
          setShotAnimation((pv) => ({ ...pv, gridRow: animationKeyFrame }));
        }
      }, 1000);

      return () => {
        setTimeout(() => {
          clearInterval(animation);
          setShotAnimation((pv) => ({ ...pv, gridRow: 5, display: "none" }));
          setReadyToShot(true);
        }, 3000);
      };
    }
  }, [x_Key_Pressed, readyToShot]);

  return {  shotAnimation, readyToShot };
};

export default useControlMovements;
