import { Action, InitialStateType } from "./GamePlayeReducerTypes";
import { RowConstructor } from "./methods/rowConstructor";

const updateColumnsVerticalIndexes = (
  state: InitialStateType,
  rowHorizontalIndex: number
) => {
  return state.columnsVerticalIndexes.map((columnVertical_Index, index) =>
    index === rowHorizontalIndex
      ? (columnVertical_Index += 1)
      : columnVertical_Index
  ) as [number, number, number, number, number];
};

const updateContainerOfRows = (
  state: InitialStateType,
  columnVerticalIndex: number,
  rowHorizontalIndex: number
) => {
  let updateColumnVerticalIndex = false;

  const updateNumberInsideOfARow = state.containerOfRows.map((Row, index) => {
    if (index === columnVerticalIndex) {
      return Row.map((Box, index) => {
        if (index === rowHorizontalIndex) {
          const updatedBox = {
            value: state.selectedNr,
            AmountTimesAdded: Box.AmountTimesAdded + 1,
          };
          if (updatedBox.AmountTimesAdded === 3) {
            updateColumnVerticalIndex = true;
            return updatedBox;
          } else return updatedBox;
        } else return Box;
      });
    } else return Row;
  });

  if (state.selectedNr === 0) {
    return { ...state };
  } else if (updateColumnVerticalIndex) {
    const addAnotherRow = [...updateNumberInsideOfARow, RowConstructor()];
    return {
      ...state,
      containerOfRows: addAnotherRow,
      columnsVerticalIndexes: updateColumnsVerticalIndexes(
        state,
        rowHorizontalIndex
      ),
    };
  } else {
    return { ...state, containerOfRows: updateNumberInsideOfARow };
  }
};

const updateSelectedNr = (state: InitialStateType, action: Action) =>
  action.selectedNr
    ? { ...state, selectedNr: action.selectedNr }
    : { ...state };

const moveLeft = (state: InitialStateType) =>
  state.bottomBoxPosition === 1
    ? { ...state }
    : { ...state, bottomBoxPosition: state.bottomBoxPosition - 1 };

const moveRight = (state: InitialStateType) =>
  state.bottomBoxPosition === 5
    ? { ...state }
    : { ...state, bottomBoxPosition: state.bottomBoxPosition + 1 };

export {
  moveLeft,
  moveRight,
  updateColumnsVerticalIndexes,
  updateContainerOfRows,
  updateSelectedNr,
};
