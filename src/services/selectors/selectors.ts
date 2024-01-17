import { RootState } from "../store";
import {
  IIngredientsState,
  TConstructorState,
} from "../burger-constructor/reducer";
import { IAllOrders, IAllOrdersData } from "../all-orders/reducer";
import { TOrderDetailsInitialState } from "../modals/order-details/reducer";
import { IUserData } from "../pages/user/reducer";
import { IConstructorIngredients } from "../modals/order-details/actions";

export const allIngredientsSelector = (state: RootState): IIngredientsState[] =>
  state.ingredientsReducer.ingredients;
export const allOrdersSelector = (state: RootState): IAllOrders[] | null =>
  state.allOrderReducer.data?.orders || null;
export const userOrdersSelector = (state: RootState): IAllOrders[] | null =>
  state.userOrderReducer.data?.orders || null;
export const orderNumberSelector = (state: RootState): number | null =>
  state.orderDetailsModal.orderNumber;
export const selectedOrderSelector = (state: RootState): IAllOrders|null =>
  state.orderDetailsModal.selectedOrder;
export const constructorIngredientsSelector = (
  state: RootState
): TConstructorState => state.constructorIngredientsReducer;
export const isLoadingSelector = (state: RootState): boolean =>
  state.orderDetailsModal.loading;
export const costStateSelector = (state: RootState): number =>
  state.costReducer;
export const userSelector = (state: RootState): IUserData | null =>
  state.userLogicReducer.user;
