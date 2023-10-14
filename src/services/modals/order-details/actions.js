export const OPEN_MODAL_ORDER_DETAILS = "OPEN_MODAL_ORDER_DETAILS";
export const CLOSE_MODAL_ORDER_DETAILS = "CLOSE_MODAL_ORDER_DETAILS";
export const SET_ORDER_NUMBER = " SET_ORDER_NUMBER";

export const setOrderNumber = (orderNumber) => {
  return { type: SET_ORDER_NUMBER, payload: orderNumber };
};
export const openOrderModal = () => {
  return { type: OPEN_MODAL_ORDER_DETAILS };
};
export const submitOrder = (constructorIngredients) => {
  return function (dispatch) {
    dispatch(openOrderModal());
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
      .then((res) => res.json())
      .then((data) => dispatch(setOrderNumber(data.order.number)))
      .catch((error) => console.log(`Упс ошибка - ${error}`));
  };
};
