import * as ActionTypes from "./constants";
import { TUserOrdersActions } from "./actions";
import { TAllOrdersState } from "../all-orders/reducer";
const initialState: TAllOrdersState = {
  status: "OFFLINE",
  data: null,
  error: null,
};

export const userOrderReducer = (
  state = initialState,
  action: TUserOrdersActions
): TAllOrdersState => {
  switch (action.type) {
    case ActionTypes.USER_ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "CONNECTING",
      };
    }
    case ActionTypes.USER_ORDERS_WS_OPEN: {
      return {
        ...state,
        status: "ONLINE",
      };
    }
    case ActionTypes.USER_ORDERS_WS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.USER_ORDERS_WS_MESSAGE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
