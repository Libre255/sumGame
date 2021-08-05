import { randomizeUpcomingBox } from "../Methods/randomizeUpcomingBox";
import { Action, BoxProperties, InitialStateType } from "./GamePlayeReducerTypes";
import { RowConstructor } from "./methods/rowConstructor";

type BoxPropertiesOptional = Partial<BoxProperties>

const updateOneBox = (state: InitialStateType, columnVerticalIndex: number, rowHorizontalIndex: number, boxUpdatedValues:BoxPropertiesOptional)=> {
  return state.containerOfRows.map((Row, rowIndex) => {
    if (rowIndex === columnVerticalIndex) {
      return Row.map((boxValues, boxIndex) => {
        if (boxIndex === rowHorizontalIndex) {
          
          const updatedBox = {
            ...boxValues, 
            value: state.selectedNr,
            AmountTimesAdded: boxValues.AmountTimesAdded + 1,
          };
          if(boxUpdatedValues.AmountTimesAdded){
            return updatedBox
          }
          return {
            ...boxValues, ...boxUpdatedValues
          }
        } else return boxValues;
      });
    } else return Row;
  });
}

const updateColumnsVerticalIndexes = (
  state: InitialStateType,
  rowHorizontalIndex: number,
  columnVerticalIndex: number
) => {
  const lockLastPlayedNr = updateOneBox(state, columnVerticalIndex, rowHorizontalIndex, {NrLocked:true})

  return {...state, containerOfRows:lockLastPlayedNr, columnsVerticalIndexes: state.columnsVerticalIndexes.map((columnVertical_Index, index) =>
          index === rowHorizontalIndex
            ? (columnVertical_Index += 1)
            : columnVertical_Index
        ) as [number, number, number, number, number]
          };
};
const updateColumIndexOnKeyCPress = (state: InitialStateType, columnVerticalIndex: number, rowHorizontalIndex: number)=>{
  if(!state.containerOfRows[columnVerticalIndex]){
    return state
  }
  
  const lastNumberOnPlay = state.containerOfRows[columnVerticalIndex][rowHorizontalIndex]

  if(lastNumberOnPlay.value === 0){
    return state
  }else{
    const updatedVersion = updateColumnsVerticalIndexes(state, rowHorizontalIndex, columnVerticalIndex)
    const verticalIndex = updatedVersion.columnsVerticalIndexes[rowHorizontalIndex]

    if(!updatedVersion.containerOfRows[verticalIndex]){
      if(updatedVersion.containerOfRows.length === 4){
        const lockLastPlayedNr = updateOneBox(state, columnVerticalIndex, rowHorizontalIndex, {NrLocked:true})
        return {...state, containerOfRows:lockLastPlayedNr}
      }
      return {...updatedVersion, containerOfRows:[...updatedVersion.containerOfRows, RowConstructor()] }
    }else{
      return updatedVersion
    }
  }
  
}
const updateBox = (state: InitialStateType,
  columnVerticalIndex: number,
  rowHorizontalIndex: number)=>{
  
  const updateNumberInsideOfARow = updateOneBox(state, columnVerticalIndex, rowHorizontalIndex, {AmountTimesAdded:1})

  if(!updateNumberInsideOfARow[columnVerticalIndex]){
    return { updatedState:{...state}}
  }
  const checkIf3Times = updateNumberInsideOfARow[columnVerticalIndex][rowHorizontalIndex].AmountTimesAdded === 3 ? true : false
  const columHasBeenFilled = updateNumberInsideOfARow[updateNumberInsideOfARow.length -1][rowHorizontalIndex].value === 0 ? false: true;
  const checkIfLockedNr = updateNumberInsideOfARow[columnVerticalIndex][rowHorizontalIndex].NrLocked
  if(checkIfLockedNr){
    return { updatedState:{...state}}
  }

  if(checkIf3Times){
    const updateNr = {...state,containerOfRows:updateNumberInsideOfARow}
    const updatedStateWithlockNumber = {...updateNr, containerOfRows:updateOneBox(updateNr, columnVerticalIndex, rowHorizontalIndex, {NrLocked:true})}
    return {checkIf3Times,
      columHasBeenFilled,
      updatedState:{
        ...updatedStateWithlockNumber,
        columnsVerticalIndexes: updateColumnsVerticalIndexes(state, rowHorizontalIndex, columnVerticalIndex).columnsVerticalIndexes,
        selectedNr: randomizeUpcomingBox()
      }
    }
  }else{
    return {checkIf3Times, columHasBeenFilled, updatedState:{...state, containerOfRows: updateNumberInsideOfARow, selectedNr: randomizeUpcomingBox()}}
  }
}

const checkColumnStatus = (state: InitialStateType,
  columnVerticalIndex: number,
  rowHorizontalIndex: number)=>{

  const {checkIf3Times, columHasBeenFilled, updatedState} = updateBox(state, columnVerticalIndex, rowHorizontalIndex)
  const reachedMaxRows = state.containerOfRows.length === 4
  
  if(reachedMaxRows){
    return updatedState
  }else{
    if(checkIf3Times && columHasBeenFilled){
      return {
        ...updatedState,
        containerOfRows:[...updatedState.containerOfRows, RowConstructor()]
      }
    }else{
      return updatedState
    }
  }
}

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
  updateSelectedNr,
  updateBox,
  checkColumnStatus,
  updateColumIndexOnKeyCPress
};
