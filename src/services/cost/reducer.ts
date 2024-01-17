import { TCostActions } from "./actions";
import * as ActionTypes from "./constants";

const initialState: number = 0;
export function costReducer(
  state = initialState,
  action: TCostActions
): number {
  switch (action.type) {
    case ActionTypes.ADD:
      return state + action.payload;

    case ActionTypes.REMOVE:
      return state - action.payload;

    case ActionTypes.RESET:
      return initialState;

    default:
      return state;
  }
}
