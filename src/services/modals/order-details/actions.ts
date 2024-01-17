import { baseUrl } from "../../../components/app/app";
import { request } from "../../../utils/request";
import { RootState } from "../../store";
import * as ActionTypes from "./constants";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import {
  IIngredientsState,
  TConstructorState,
} from "../../burger-constructor/reducer";
import { IAllOrders, IAllOrdersData } from "../../all-orders/reducer";
import { AppThunk } from "../../action-types/app-actions";
interface IOpenOrderModalAction {
  type: typeof ActionTypes.OPEN_MODAL_ORDER_DETAILS;
}
interface ICloseOrderModalAction {
  type: typeof ActionTypes.CLOSE_MODAL_ORDER_DETAILS;
}
interface ISumbitOrderRequestAction {
  type: typeof ActionTypes.SUBMIT_ORDER_NUMBER_REQUEST;
}
interface ISumbitOrderSuccessAction {
  type: typeof ActionTypes.SUBMIT_ORDER_NUMBER_SUCCESS;
  payload: number;
}
interface ISumbitOrderFailedAction {
  type: typeof ActionTypes.SUBMIT_ORDER_NUMBER_FAILED;
  payload: string;
}

interface IGettOrderAction {
  type: typeof ActionTypes.GET_ORDER_SUCCESS;
  payload: IAllOrders;
}

export type TOrderDetailsActions =
  | IOpenOrderModalAction
  | ICloseOrderModalAction
  | ISumbitOrderRequestAction
  | ISumbitOrderSuccessAction
  | ISumbitOrderFailedAction
  | IGettOrderAction;

export interface IConstructorIngredients {
  bun: {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    key: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
    _id: string;
  } | null;

  ingredients:
    | [
        {
          calories: number;
          carbohydrates: number;
          fat: number;
          image: string;
          image_large: string;
          image_mobile: string;
          key: string;
          name: string;
          price: number;
          proteins: number;
          type: string;
          __v: number;
          _id: string;
        }
      ]
    | [];
}
const setOrderNumberRequest = () => ({
  type: ActionTypes.SUBMIT_ORDER_NUMBER_REQUEST,
});

const setOrderNumberFailed = (error: unknown) => ({
  type: ActionTypes.SUBMIT_ORDER_NUMBER_FAILED,
  error,
});
export const setOrderNumber = (orderNumber: string) => {
  return {
    type: ActionTypes.SUBMIT_ORDER_NUMBER_SUCCESS,
    payload: orderNumber,
  };
};

export const getOrderNumberAction = (orderNumber: IAllOrders) => {
  return { type: ActionTypes.GET_ORDER_SUCCESS, payload: orderNumber };
};
export const openOrderModal = () => {
  return { type: ActionTypes.OPEN_MODAL_ORDER_DETAILS };
};
export const submitOrder = (
  constructorIngredients: TConstructorState
): AppThunk<Promise<void>> => {
  return async function (dispatch: Dispatch) {
    dispatch(setOrderNumberRequest());
    const ingredId = constructorIngredients.ingredients.map(
      (item: IIngredientsState) => item._id
    );
    const bunId = constructorIngredients.bun?._id;
    const ingredientsId = [bunId, ...ingredId, bunId];
    try {
      const data = await request<IAllOrdersData>(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: "Bearer" + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({
          ingredients: ingredientsId,
        }),
      });
      dispatch(setOrderNumber(data.orders[0].number));
    } catch (error) {
      console.log(`Упс ошибка - ${error}`);
      dispatch(setOrderNumberFailed(error));
    }
  };
};

export const getOrderNumber = (number: string): AppThunk<Promise<void>> => {
  return function (dispatch) {
    return request<IAllOrdersData>(`${baseUrl}/api/orders/${number}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        console.log(data, "ОРДЕРДС");
        dispatch(getOrderNumberAction(data.orders[0]));
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
      });
  };
};
