import { url } from "../../components/app/app";
import { onResponse } from "../../utils/on-response";
//actions
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCES";
export const GET_SELECTED_INGREDIENTS = "GET_SELECTED_INGREDIENTS";
export const SWITCH_TAB = "SWITCH_TAB";
//action-creators
const getIngredientsActionRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});
export const getSelectedIngredientsActionRequest = (item) => ({
  type: GET_SELECTED_INGREDIENTS,
  payload: item,
});
const getIngredientsActionSuccess = (ingredients) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

const getIngredientsActionError = (error) => ({
  type: GET_INGREDIENTS_FAILED,
  payload: error,
});

export const switchTabAction = (tab) => ({
  type: SWITCH_TAB,
  payload: tab,
});

///thunk

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsActionRequest());
  return fetch(url)
    .then(onResponse)
    .then((data) => data.data)
    .then((data) => {
      dispatch(getIngredientsActionSuccess(data));
    })
    .catch((error) => dispatch(getIngredientsActionError(error)));
};
