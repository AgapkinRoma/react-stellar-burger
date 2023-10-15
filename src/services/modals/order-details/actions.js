export const OPEN_MODAL_ORDER_DETAILS = "OPEN_MODAL_ORDER_DETAILS";
export const CLOSE_MODAL_ORDER_DETAILS = "CLOSE_MODAL_ORDER_DETAILS";
export const SUBMIT_ORDER_NUMBER_SUCCESS = "SUBMIT_ORDER_NUMBER_SUCCESS";
export const SUBMIT_ORDER_NUMBER_REQUEST = "SUBMIT_ORDER_NUMBER_REQUEST";
export const SUBMIT_ORDER_NUMBER_FAILED = "SUBMIT_ORDER_NUMBER_FAILED";

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
export const openOrderModal = () => {
  return { type: OPEN_MODAL_ORDER_DETAILS };
};
export const submitOrder = (constructorIngredients) => {
  return function (dispatch) {
    dispatch(setOrderNumberRequest);

    const ingredId = constructorIngredients.ingredients.map((item) => item._id);
    const bunId = constructorIngredients.bun._id;
    const ingredientsId = [bunId, ...ingredId, bunId];
    return fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ingredients: ingredientsId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
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
