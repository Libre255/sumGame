import { useState, useEffect } from "react";

interface keyType {
  key: string;
}

const useKeyPressed = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    function keyDownHandler({ key }: keyType) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    function keyUpHandler({ key }: keyType) {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    }

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPressed;
