import * as ActionTypes from "./constants";
interface IAddCostAction {
  type: typeof ActionTypes.ADD;
  payload: number;
}

interface IRemoveCostAction {
  type: typeof ActionTypes.REMOVE;
  payload: number;
}

interface IResetCostAction {
  type: typeof ActionTypes.RESET;
}

export const addCostActionCreater =  (totalCost:number) => ({
  type:ActionTypes.ADD,
  payload:totalCost
})
export const resetCostActionCreater =  () => ({
  type:ActionTypes.RESET,

})


export type TCostActions =
  | IAddCostAction
  | IRemoveCostAction
  | IResetCostAction;
