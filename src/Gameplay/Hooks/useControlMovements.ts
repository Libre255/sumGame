import { useState, useEffect } from "react";
import useKeyPressed from "./useKeyPressed";
import { COMMANDS } from "../reducer/GamePlayReducer";
import {
  Props,
  ReadyToshotType,
  ShotAnimationType,
} from "../interfaces/controlMovementsTypes";

const useControlMovements = ({ dispatch }: Props) => {
  const [shotAnimation, setShotAnimation] = useState<ShotAnimationType>({
    gridRow: 5,
    display: "none",
  });
  const [readyToShot, setReadyToShot] = useState<ReadyToshotType>({
    itsReady2Shoot: true,
    gameStarted: false,
  });

  const rightkey = useKeyPressed("ArrowRight");
  const leftKey = useKeyPressed("ArrowLeft");
  const x_Key_Pressed = useKeyPressed("x");

  useEffect(() => {
    if (leftKey) {
      dispatch({ type: COMMANDS.Left_BottomPosition });
    } else if (rightkey) {
      dispatch({ type: COMMANDS.Right_BottomPosition });
    }
  }, [leftKey, rightkey, dispatch]);

  useEffect(() => {
    let animationKeyFrame: number = 5;

    if (x_Key_Pressed && !readyToShot.gameStarted) {
      setReadyToShot((pv) => ({ ...pv, gameStarted: true }));
    }

    if (x_Key_Pressed && readyToShot.itsReady2Shoot) {
      setReadyToShot((pv) => ({ ...pv, itsReady2Shoot: false }));
      setShotAnimation((pv) => ({ ...pv, display: "block" }));
      const animation = setInterval(() => {
        if (animationKeyFrame > 2) {
          animationKeyFrame--;
          setShotAnimation((pv) => ({ ...pv, gridRow: animationKeyFrame }));
        }
      }, 500);

      return () => {
        setTimeout(() => {
          clearInterval(animation);
          setShotAnimation((pv) => ({ ...pv, gridRow: 5, display: "none" }));
          setReadyToShot((pv) => ({ ...pv, itsReady2Shoot: true }));
        }, 2000);
      };
    }
  }, [x_Key_Pressed, readyToShot]);

  return { shotAnimation, readyToShot };
};

export default useControlMovements;
