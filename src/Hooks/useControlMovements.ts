import { useState, useEffect, useCallback } from "react";
import useKeyPressed from "./useKeyPressed";

const useControlMovements = () => {
  const [bottomBoxPosition, setBottomBoxPosition] = useState<number>(1);
  const [shotAnimation, setShotAnimation] = useState<{
    gridColumn: number;
    gridRow: number;
  }>({ gridColumn: bottomBoxPosition, gridRow: 5 });
  const [waitAnimation, setWaitAnimation] = useState(true);

  const rightkey = useKeyPressed("ArrowRight");
  const leftKey = useKeyPressed("ArrowLeft");
  const x_Key_Pressed = useKeyPressed("x");

  useEffect(() => {
    if (leftKey) {
      setBottomBoxPosition((pv) => (pv === 1 ? pv : (pv -= 1)));
    } else if (rightkey) {
      setBottomBoxPosition((pv) => (pv === 5 ? pv : (pv += 1)));
    }
    setShotAnimation((pv) => ({ ...pv, gridColumn: bottomBoxPosition }));
  }, [leftKey, rightkey]);

  useEffect(() => {
    let keyFrame = 5;
    if (x_Key_Pressed && waitAnimation) {
      setWaitAnimation(false);
      const animation = setInterval(() => {
        keyFrame--;
        setShotAnimation((pv) => ({ ...pv, gridRow: keyFrame }));
      }, 1000);

      return () => {
        setTimeout(() => {
          clearInterval(animation);
          setShotAnimation((pv) => ({ ...pv, gridRow: 5 }));
          setWaitAnimation(true);
        }, 5000);
      };
    }
  }, [x_Key_Pressed]);

  return { bottomBoxPosition, shotAnimation };
};

export default useControlMovements;