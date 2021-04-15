import { useState, useEffect } from "react";
import useKeyPressed from "./useKeyPressed";

const useControlMovements = () => {
  const [bottomBoxPosition, setBottomBoxPosition] = useState<number>(1);
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
      setBottomBoxPosition((pv) => (pv === 1 ? pv : (pv -= 1)));
    } else if (rightkey) {
      setBottomBoxPosition((pv) => (pv === 5 ? pv : (pv += 1)));
    }
  }, [leftKey, rightkey]);

  useEffect(() => {
    let keyFrame: number = 5;

    if (x_Key_Pressed && readyToShot) {
      setReadyToShot(false);
      setShotAnimation((pv) => ({ ...pv, display: "block" }));
      const animation = setInterval(() => {
        if (keyFrame > 2) {
          keyFrame--;
          setShotAnimation((pv) => ({ ...pv, gridRow: keyFrame }));
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

  return { bottomBoxPosition, shotAnimation, readyToShot };
};

export default useControlMovements;
