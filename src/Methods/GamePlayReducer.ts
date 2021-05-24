import {
  BoxProperties,
  InitialStateType,
  ACTIONStype,
  Action,
} from "./GamePlayeReducerTypes";

const ACTIONS: ACTIONStype = {
  UPDATE_CONTAINER_OF_ROWS: "update container of rows",
  UPDATE_columnsVerticalIndexes: "selects row inside container of Rows",
  UPDATE_SELECTED_NR: "update selected number",
  Left_BottomPosition: "Move bottomposition to the left",
  Right_BottomPosition: "Move bottomposition to the right",
};

const RowConstructor = (): BoxProperties[] => [
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
];
const initialState: InitialStateType = {
  columnsVerticalIndexes: [0, 0, 0, 0, 0],
  containerOfRows: [RowConstructor()],
  bottomBoxPosition: 1,
  selectedNr: 0,
};

const reducer = (state: InitialStateType, action: Action) => {
  const rowHorizontalIndex = state.bottomBoxPosition - 1;
  const columnVerticalIndex = state.columnsVerticalIndexes[rowHorizontalIndex];

  const updateColumnsVerticalIndexes = () => {
    return state.columnsVerticalIndexes.map((columnVertical_Index, index) =>
      index === rowHorizontalIndex
        ? (columnVertical_Index += 1)
        : columnVertical_Index
    ) as [number, number, number, number, number];
  };
  const updateContainerOfRows = () => {
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
        columnsVerticalIndexes: updateColumnsVerticalIndexes(),
      };
    } else {
      return { ...state, containerOfRows: updateNumberInsideOfARow };
    }
  };
  const updateSelectedNr = () =>
    action.selectedNr
      ? { ...state, selectedNr: action.selectedNr }
      : { ...state };
  const moveLeft = () =>
    state.bottomBoxPosition === 1
      ? { ...state }
      : { ...state, bottomBoxPosition: state.bottomBoxPosition - 1 };
  const moveRight = () =>
    state.bottomBoxPosition === 5
      ? { ...state }
      : { ...state, bottomBoxPosition: state.bottomBoxPosition + 1 };

  switch (action.type) {
    case ACTIONS.UPDATE_CONTAINER_OF_ROWS:
      return updateContainerOfRows();
    case ACTIONS.UPDATE_SELECTED_NR:
      return updateSelectedNr();
    case ACTIONS.Left_BottomPosition:
      return moveLeft();
    case ACTIONS.Right_BottomPosition:
      return moveRight();
    default:
      return state;
  }
};

export { initialState, reducer, ACTIONS };
