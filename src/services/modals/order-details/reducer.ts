import { TOrderDetailsActions } from "./actions";
import * as ActionTypes from "./constants";
import { IAllOrders } from "../../all-orders/reducer";
export type TOrderDetailsInitialState={
  ordersModal:boolean;
  orderNumber:number|null;
  loading:boolean;
  error:string|null;
  selectedOrder:IAllOrders|null
}

const initialState:TOrderDetailsInitialState = {
  ordersModal: false,
  orderNumber: null,
  loading: false,
  error: null,
  selectedOrder: null,
};
export function orderDetailsModal(state = initialState, action:TOrderDetailsActions):TOrderDetailsInitialState {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL_ORDER_DETAILS: {
      return {
        ...state,
        ordersModal: true,
      };
    }
    case ActionTypes.CLOSE_MODAL_ORDER_DETAILS: {
      return initialState;
    }

    case ActionTypes.SUBMIT_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ActionTypes.SUBMIT_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        loading: false,
      };
    }

    case ActionTypes.SUBMIT_ORDER_NUMBER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case ActionTypes.GET_ORDER_SUCCESS: {
      return {
        ...state,
        selectedOrder: action.payload,
      };
    }
    default:
      return state;
  }
}
