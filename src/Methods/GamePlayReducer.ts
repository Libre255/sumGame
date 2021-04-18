interface initialStateType {
  TopBoxesArray:number[],
  bottomBoxPosition:number,
  selectedNr:number
}

export interface action {
  type:string,
  selectedNr?:number
}
const ACTIONS = {
  UPDATE_TOP_ARRAY:'update Top Boxes Array',
  Left_BottomPosition:'Move bottomposition to the left',
  Right_BottomPosition:'Move bottomposition to the right',
  UPDATE_SELECTED_NR:'update selected number'
}

const initialState:initialStateType = {
  TopBoxesArray:[0,0,0,0,0],
  bottomBoxPosition:1,
  selectedNr:0
}

const reducer = (state:initialStateType, action:action)=>{
  const updateTopBoxesArr = ()=> {
    let copyState = {...state}
    copyState.TopBoxesArray[copyState.bottomBoxPosition -1] = copyState.selectedNr
    return copyState
  }
  const updateSelectedNr = ()=> action.selectedNr ? {...state, selectedNr: action.selectedNr} : {...state}
  const moveLeft = () => state.bottomBoxPosition === 1 ? {...state} : {...state, bottomBoxPosition: state.bottomBoxPosition - 1}
  const moveRight = () => state.bottomBoxPosition === 5 ? {...state} : {...state, bottomBoxPosition: state.bottomBoxPosition + 1}
  
  switch (action.type) {
    case ACTIONS.UPDATE_TOP_ARRAY : 
      return updateTopBoxesArr()
    case ACTIONS.UPDATE_SELECTED_NR:
      return updateSelectedNr()
    case ACTIONS.Left_BottomPosition:
      return moveLeft()
    case ACTIONS.Right_BottomPosition: 
      return moveRight()
    default: 
      return state
  }
}


export { initialState, reducer, ACTIONS}