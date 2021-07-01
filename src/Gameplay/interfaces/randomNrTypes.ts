import { Action } from "../reducer/GamePlayeReducerTypes";

export interface Props {
  readyToShot: { itsReady2Shoot: boolean; gameStarted: boolean };
  dispatch: React.Dispatch<Action>;
}
