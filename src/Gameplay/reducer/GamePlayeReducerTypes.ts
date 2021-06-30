export interface BoxProperties {
  value: number;
  AmountTimesAdded: number;
}

export interface InitialStateType {
  columnsVerticalIndexes: [number, number, number, number, number];
  containerOfRows: BoxProperties[][];
  bottomBoxPosition: number;
  selectedNr: number;
}

export interface Action {
  type: string;
  selectedNr?: number;
}

export interface COMMANDstype {
  UPDATE_CONTAINER_OF_ROWS: string;
  UPDATE_columnsVerticalIndexes: string;
  UPDATE_SELECTED_NR: string;
  Left_BottomPosition: string;
  Right_BottomPosition: string;
}
