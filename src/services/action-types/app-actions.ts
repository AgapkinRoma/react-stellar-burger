import { ThunkAction } from "redux-thunk";
import { TAllOrdersActions } from "../all-orders/actions";
import { TBurgerConstructorActions } from "../burger-constructor/actions";
import { TBurgetIngredientsActions } from "../burger-ingredients/actions";
import { TCostActions } from "../cost/actions";
import { TModalIngredientsDetailsActions } from "../modals/ingredients-details/action";
import { TOrderDetailsActions } from "../modals/order-details/actions";
import { TForgotPasswordActions } from "../pages/forgot-password/action";
import { TResetPasswordActions } from "../pages/reset-password/action";
import { TUserActions } from "../pages/user/action";
import { TUserOrdersActions } from "../user-orders/actions";
import { RootState } from "../store";
import { IUserData } from "../pages/user/reducer";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk/src";
export type AppActions =
  | TAllOrdersActions
  | TBurgerConstructorActions
  | TBurgetIngredientsActions
  | TCostActions
  | TModalIngredientsDetailsActions
  | TOrderDetailsActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TUserActions
  | TUserOrdersActions;

export type AppThunk<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

export type MyDispatch<TReturnType = Promise<void>> = (
  action: AppActions | AppThunk<TReturnType>
) => TReturnType;

// export type AppDispatch = ThunkDispatch<RootState, never, AppActions>;
