import { baseUrl } from "../../../components/app/app";
import { onResponse } from "../../../utils/on-response";
import { request } from "../../../utils/request";

export const OPEN_MODAL_ORDER_DETAILS = "OPEN_MODAL_ORDER_DETAILS";
export const CLOSE_MODAL_ORDER_DETAILS = "CLOSE_MODAL_ORDER_DETAILS";
export const SUBMIT_ORDER_NUMBER_SUCCESS = "SUBMIT_ORDER_NUMBER_SUCCESS";
export const SUBMIT_ORDER_NUMBER_REQUEST = "SUBMIT_ORDER_NUMBER_REQUEST";
export const SUBMIT_ORDER_NUMBER_FAILED = "SUBMIT_ORDER_NUMBER_FAILED";
export const GET_ORDER_NUMBER = "GET_ORDER_NUMBER";

const setOrderNumberRequest = () => ({
  type: SUBMIT_ORDER_NUMBER_REQUEST,
});

const setOrderNumberFailed = (error) => ({
  type: SUBMIT_ORDER_NUMBER_FAILED,
  error,
});
export const setOrderNumber = (orderNumber) => {
  return { type: SUBMIT_ORDER_NUMBER_SUCCESS, payload: orderNumber };
};

export const getOrderNumberAction = (orderNumber) => {
  return { type: GET_ORDER_NUMBER, payload: orderNumber };
};
export const openOrderModal = () => {
  return { type: OPEN_MODAL_ORDER_DETAILS };
};
export const submitOrder = (constructorIngredients) => {
  return function (dispatch) {
    dispatch(setOrderNumberRequest);

    const ingredId = constructorIngredients.ingredients.map((item) => item._id);
    const bunId = constructorIngredients.bun._id;
    const ingredientsId = [bunId, ...ingredId, bunId];
    return request(`${baseUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer" + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        ingredients: ingredientsId,
      }),
    })
      .then((data) => {
        dispatch(setOrderNumber(data.order.number));
        dispatch(openOrderModal());
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
        dispatch(setOrderNumberFailed(error));
      });
  };
};
// GET https://norma.nomoreparties.space/api/orders/{номер заказа}

export const getOrderNumber = (number) => {
  return function (dispatch) {
    return request(`${baseUrl}/api/orders${number}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        dispatch(getOrderNumber(data.order.number));
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
      });
  };
};
