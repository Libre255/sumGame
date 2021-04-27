interface initialStateType {
  verticalTopBoxesIndex: [number, number, number, number, number];
  TopBoxesArray: { value: number; AmountTimesAdded: number }[][];
  bottomBoxPosition: number;
  selectedNr: number;
}

export interface action {
  type: string;
  selectedNr?: number;
}
const ACTIONS = {
  UPDATE_TOP_ARRAY: "update Top Boxes Array",
  UPDATE_verticalBoxArrayIndex: "selects array inside TopBoxesArray",
  UPDATE_SELECTED_NR: "update selected number",
  Left_BottomPosition: "Move bottomposition to the left",
  Right_BottomPosition: "Move bottomposition to the right",
};

const TopBoxesArrayConstructor = () => [
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
  { value: 0, AmountTimesAdded: 0 },
];
const initialState: initialStateType = {
  verticalTopBoxesIndex: [0, 0, 0, 0, 0],
  TopBoxesArray: [TopBoxesArrayConstructor()],
  bottomBoxPosition: 1,
  selectedNr: 0,
};

const reducer = (state: initialStateType, action: action) => {
  const updateVerticalTopBoxesIndex = () => {
    return state.verticalTopBoxesIndex.map((verticalArray, index) =>
      index === state.bottomBoxPosition - 1
        ? (verticalArray += 1)
        : verticalArray
    ) as [number, number, number, number, number];
  };
  const updateTopBoxesArray = () => {
    let updateVertical = false;
    const horizontalTopBoxesSelection = state.bottomBoxPosition - 1;
    const verticalTopBoxesSelection =
      state.verticalTopBoxesIndex[horizontalTopBoxesSelection];
    const updateTopBoxArrayNrs = state.TopBoxesArray.map((BoxArray, index) => {
      if (index === verticalTopBoxesSelection) {
        return BoxArray.map((Box, index) => {
          if (index === horizontalTopBoxesSelection) {
            const updateBox = {
              value: state.selectedNr,
              AmountTimesAdded: Box.AmountTimesAdded + 1,
            };
            if (updateBox.AmountTimesAdded === 3) {
              updateVertical = true;
              return updateBox;
            } else return updateBox;
          } else return Box;
        });
      } else return BoxArray;
    });

    if (state.selectedNr === 0) {
      return { ...state };
    } else if (updateVertical) {
      const addAnotherTopBoxArray = [
        ...updateTopBoxArrayNrs,
        TopBoxesArrayConstructor(),
      ];
      return {
        ...state,
        TopBoxesArray: addAnotherTopBoxArray,
        verticalTopBoxesIndex: updateVerticalTopBoxesIndex(),
      };
    } else {
      return { ...state, TopBoxesArray: updateTopBoxArrayNrs };
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
      return updateTopBoxesArray();
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
