import * as ActionTypes from "./constants";
import { IIngredientsState } from "./reducer";
import { IConstructorIngredients } from "../modals/order-details/actions";
interface ISetBunAction {
  readonly type: typeof ActionTypes.SET_BUN;
  payload:IIngredientsState;
}

interface ISetIngredientsAction {
  readonly type: typeof ActionTypes.SET_INGREDIENTS;
  payload: IIngredientsState;
}

interface IDeleteIngredientsAction {
  readonly type: typeof ActionTypes.DELETE_INGREDIENTS;
  key: string;
}

interface IDragIngredientsAction {
  readonly type: typeof ActionTypes.DRAG_INGREDIENTS;
  payload: IIngredientsState[];
}

interface ICleanIngredientsAction {
  readonly type: typeof ActionTypes.CLEAN_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | ISetBunAction
  | ISetIngredientsAction
  | IDeleteIngredientsAction
  | IDragIngredientsAction
  | ICleanIngredientsAction;

export function dropIngredientsAction(item: IIngredientsState) {
  return item.type === "bun"
    ? { type: ActionTypes.SET_BUN, payload: item }
    : { type: ActionTypes.SET_INGREDIENTS, payload: item };
}

export const deleteIngredietnsAction = (key: string) => ({
  type: ActionTypes.DELETE_INGREDIENTS,
  key: key,
});

export const dragIngredientsAction = (item: IIngredientsState[]) => ({
  type: ActionTypes.DRAG_INGREDIENTS,
  payload: item,
});

export const cleanIngredientsAction = () => ({
  type: ActionTypes.CLEAN_INGREDIENTS,
});
