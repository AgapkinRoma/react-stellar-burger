import * as ActionTypes from "./constants";
import { TAllOrdersActions } from "./actions";

export type TAllOrdersState = {
  status: "OFFLINE" | "CONNECTING" | "ONLINE";
  data:IAllOrdersData|null;
  error:string|null ;
};


export interface IAllOrders{
_id:string;
updatedAt:string;
status:string;
number:string;
name:string;
ingredients:string[];
createdAt:string;
}

export interface IAllOrdersData  {
  orders:IAllOrders[];
  success:boolean;
  total:number;
  totalToday:number;

}

const initialState: TAllOrdersState = {
  status: "OFFLINE",
  data: null,
  error: null,
};

export const allOrderReducer = (
  state = initialState,
  action: TAllOrdersActions
): TAllOrdersState => {
  switch (action.type) {
    case ActionTypes.ALL_ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "CONNECTING",
      };
    }
    case ActionTypes.ALL_ORDERS_WS_OPEN: {
      return {
        ...state,
        status: "ONLINE",
      };
    }
    case ActionTypes.ALL_ORDERS_WS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.ALL_ORDERS_WS_MESSAGE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
