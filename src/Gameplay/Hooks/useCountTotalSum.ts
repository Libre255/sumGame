import { useEffect } from "react";
import { BoxProperties } from "../reducer/GamePlayeReducerTypes";

interface Props {
  containerOfRows: BoxProperties[][];
  setTotalSumScore: React.Dispatch<
    React.SetStateAction<{
      totalSum: number;
      gameEnded: boolean;
    }>
  >;
}

const useCountTotalSum = ({ containerOfRows, setTotalSumScore }: Props) => {
  useEffect(() => {
    const allBoxesLockedNr = containerOfRows.every((row) =>
      row.every((box) => box.NrLocked)
    );
    const totalSum = containerOfRows.reduce((startValue, rowValue) => {
      return (
        startValue +
        rowValue.reduce(
          (startNr, box) =>
            box.NrLocked ? startNr + box.value : startNr + 0,
          0
        )
      );
    }, 0);
    if (containerOfRows.length === 4) {
      if (allBoxesLockedNr) {
        setTotalSumScore({ totalSum: totalSum, gameEnded: true });
      }
    }
  }, [containerOfRows, setTotalSumScore]);
};
export { useCountTotalSum };
