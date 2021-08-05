import { randomizeUpcomingBox } from "../Methods/randomizeUpcomingBox";
import {
  InitialStateType,
  COMMANDstype,
  Action,
} from "./GamePlayeReducerTypes";
import { RowConstructor } from "./methods/rowConstructor";
import {
  checkColumnStatus,
  moveLeft,
  moveRight,
  updateSelectedNr,
  updateColumIndexOnKeyCPress
} from "./reducerFunctions";

const COMMANDS: COMMANDstype = {
  UPDATE_CONTAINER_OF_ROWS: "update container of rows",
  UPDATE_columnsVerticalIndexes: "updates columnsVertical Indexes when the user locks the box number with c",
  UPDATE_SELECTED_NR: "update selected number",
  Left_BottomPosition: "Move bottomposition to the left",
  Right_BottomPosition: "Move bottomposition to the right",
};

const initialState: InitialStateType = {
  columnsVerticalIndexes: [0, 0, 0, 0, 0],
  containerOfRows: [RowConstructor()],
  bottomBoxPosition: 1,
  selectedNr: randomizeUpcomingBox()
};

const reducer = (state: InitialStateType, action: Action) => {
  const rowHorizontalIndex = state.bottomBoxPosition - 1;
  const columnVerticalIndex = state.columnsVerticalIndexes[rowHorizontalIndex];

  switch (action.type) {
    case COMMANDS.UPDATE_CONTAINER_OF_ROWS:
      return checkColumnStatus(
        state,
        columnVerticalIndex,
        rowHorizontalIndex
      );
    case COMMANDS.UPDATE_SELECTED_NR:
      return updateSelectedNr(state, action);
    case COMMANDS.Left_BottomPosition:
      return moveLeft(state);
    case COMMANDS.Right_BottomPosition:
      return moveRight(state);
    case COMMANDS.UPDATE_columnsVerticalIndexes:
      return updateColumIndexOnKeyCPress(state, columnVerticalIndex, rowHorizontalIndex)
    default:
      return state;
  }
};

export { initialState, reducer, COMMANDS };
