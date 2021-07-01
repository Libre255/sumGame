import { Action } from "../reducer/GamePlayeReducerTypes";

export interface Props {
  dispatch: React.Dispatch<Action>;
}

export interface ShotAnimationType {
  gridRow: number;
  display: string;
}
export interface ReadyToshotType {
  itsReady2Shoot: boolean;
  gameStarted: boolean;
}
