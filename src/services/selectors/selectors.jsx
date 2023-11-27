export const allIngredientsSelector = (state) =>
  state.ingredientsReducer.ingredients;
export const allOrdersSelector = (state) => state.allOrderReducer.data?.orders;
export const userOrdersSelector = (state) =>
  state.userOrderReducer.data?.orders;
export const orderNumberSelector = (state) =>
  state.orderDetailsModal.orderNumber;

export const selectedOrderSelector = (state) =>
  state.orderDetailsModal.selectedOrder;
