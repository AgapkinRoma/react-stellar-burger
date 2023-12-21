export const allIngredientsSelector = (state) =>
  state.ingredientsReducer.ingredients;
export const allOrdersSelector = (state) => state.allOrderReducer.data?.orders;
export const userOrdersSelector = (state) =>
  state.userOrderReducer.data?.orders;
export const orderNumberSelector = (state) =>
  state.orderDetailsModal.orderNumber;
export const selectedOrderSelector = (state) =>
  state.orderDetailsModal.selectedOrder;
export const constructorIngredientsSelector = (state) =>
  state.constructorIngredientsReducer;
export const isLoadingSelector = (state) => state.orderDetailsModal.loading;
export const costStateSelector = (state) => state.costReducer;
export const userSelector = (state) => state.userLogicReducer.user;
