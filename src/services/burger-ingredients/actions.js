import { url } from "../../components/app/app";
//actions
export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCES";
export const GET_SELECTED_INGREDIENTS = "GET_SELECTED_INGREDIENTS";
export const SWITCH_TAB = 'SWITCH_TAB'
//action-creators
const getIngredientsActionRequest = () => ({
  type: GET_INGREDIENTS,
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

export const switchTabAction = (tab) =>({
  type:SWITCH_TAB,
  payload:tab
})

///thunk

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsActionRequest());
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`УПС ОШИБКА - ${res.status}`);
    })
    .then((data) => data.data)
    .then((data) => {
      dispatch(getIngredientsActionSuccess(data));
    })
    .catch((error) => dispatch(getIngredientsActionError(error)));
};
