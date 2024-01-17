import { ingredientsUrl } from "../../components/app/app";
import { onResponse } from "../../utils/on-response";
import { IIngredientsState } from "../burger-constructor/reducer";
import * as ActionTypes from "./constants";
import { store } from "../store";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { RootState } from "../store";
import { request } from "../../utils/request";
//actions

type TDataIngredients = {
  data: Array<IIngredientsState>;
  success: boolean;
};
interface IGetIngredientsSuccessAction {
  type: typeof ActionTypes.GET_INGREDIENTS_SUCCESS;
  payload: IIngredientsState[];
}
interface IGetIngredientsRequestAction {
  type: typeof ActionTypes.GET_INGREDIENTS_REQUEST;
}

interface IGetIngredientsFailedAction {
  type: typeof ActionTypes.GET_INGREDIENTS_FAILED;
  payload: string;
}
interface IGetSelectedIngredientsAction {
  type: typeof ActionTypes.GET_SELECTED_INGREDIENTS;
  payload: IIngredientsState[];
}
interface ISwitchIngredientsTabAction {
  type: typeof ActionTypes.SWITCH_TAB;
  payload: string;
}
export type TBurgetIngredientsActions =
  | IGetIngredientsSuccessAction
  | IGetIngredientsRequestAction
  | IGetIngredientsFailedAction
  | IGetSelectedIngredientsAction
  | ISwitchIngredientsTabAction;

//action-creators
const getIngredientsActionRequest = () => ({
  type: ActionTypes.GET_INGREDIENTS_REQUEST,
});
export const getSelectedIngredientsActionRequest = () => ({
  type: ActionTypes.GET_SELECTED_INGREDIENTS,
});
const getIngredientsActionSuccess = (ingredients: IIngredientsState[]) => ({
  type: ActionTypes.GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

const getIngredientsActionError = (error: string) => ({
  type: ActionTypes.GET_INGREDIENTS_FAILED,
  payload: error,
});

export const switchTabAction = (tab: string) => ({
  type: ActionTypes.SWITCH_TAB,
  payload: tab,
});

///thunk

export const getIngredients =
  (): ThunkAction<
    Promise<void>,
    RootState,
    unknown,
    TBurgetIngredientsActions
  > =>
  (dispatch) => {
    dispatch(getIngredientsActionRequest());
    return request<TDataIngredients>(ingredientsUrl)
      .then((data) => {
        console.log(data, "1");
        return data.data;
      })
      .then((ingredient) => {
        console.log(ingredient, "2");
        dispatch(getIngredientsActionSuccess(ingredient));
      })
      .catch((error) => {
        dispatch(getIngredientsActionError(error));
        return Promise.reject();
      });
  };
