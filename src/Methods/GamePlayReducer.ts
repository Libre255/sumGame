interface initialStateType {
  verticalBoxArrayIndex:[number, number, number, number, number];
  TopBoxesArray: {value:number, AmountTimesAdded:number}[][];
  bottomBoxPosition: number;
  selectedNr: number;
}

export interface action {
  type: string;
  selectedNr?: number;
}
const ACTIONS = {
  UPDATE_TOP_ARRAY: "update Top Boxes Array",
  UPDATE_verticalBoxArrayIndex:"selects array inside TopBoxesArray",
  UPDATE_SELECTED_NR: "update selected number",
  Left_BottomPosition: "Move bottomposition to the left",
  Right_BottomPosition: "Move bottomposition to the right"
};

const initialState: initialStateType = {
  verticalBoxArrayIndex:[0,0,0,0,0],
  TopBoxesArray: [
    [{value:0, AmountTimesAdded:0}, {value:0, AmountTimesAdded:0}, {value:0, AmountTimesAdded:0} ,{value:0, AmountTimesAdded:0},{value:0, AmountTimesAdded:0}]
  ],
  bottomBoxPosition: 1,
  selectedNr: 0,
};

const reducer = (state: initialStateType, action: action) => {
  const updateVerticalArray = ()=>{
    return state.verticalBoxArrayIndex.map((verticalArray, index) => 
            index === state.bottomBoxPosition - 1 ? verticalArray += 1 : verticalArray)
  }
  const updateTopBoxesArr = () => {
    if(state.selectedNr === 0) return {...state};
    const verticalArraySelection = state.verticalBoxArrayIndex[state.bottomBoxPosition - 1]
    let updateVertical = undefined;
    //need to create another "vertical" array once it hits 3
    const  updateTopBoxArray = state.TopBoxesArray.map((BoxArray, index)=>{
      if(index === verticalArraySelection ){
       return BoxArray.map((Box, index) => {
         if(index === state.bottomBoxPosition - 1){
           const updateBox = {value:state.selectedNr, AmountTimesAdded:Box.AmountTimesAdded + 1}
           console.log(updateBox)
           if(updateBox.AmountTimesAdded === 3){
             updateVertical = updateVerticalArray() //It stop updating the box after it hits 3 // need fix
             return updateBox
           }else return updateBox
         } else return Box;
       })
      } else return BoxArray;
    });

    let result = {...state, TopBoxesArray:updateTopBoxArray};
    if(updateVertical === undefined){
      return result 
    }else{
      result = {...state, TopBoxesArray:updateTopBoxArray, verticalBoxArrayIndex:updateVertical};
      console.log(result)
      return result
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
    case ACTIONS.UPDATE_TOP_ARRAY:
      return updateTopBoxesArr();
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
