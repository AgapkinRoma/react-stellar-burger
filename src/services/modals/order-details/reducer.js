import {
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_MODAL_ORDER_DETAILS,
  SUBMIT_ORDER_NUMBER_SUCCESS,
  SUBMIT_ORDER_NUMBER_REQUEST,
  SUBMIT_ORDER_NUMBER_FAILED,
  GET_ORDER_SUCCESS,
} from "./actions";

const initialState = {
  ordersModal: false,
  orderNumber: null,
  loading: false,
  error: null,
  selectedOrder: 0,
};
export function orderDetailsModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_ORDER_DETAILS: {
      return {
        ...state,
        ordersModal: true,
      };
    }
    case CLOSE_MODAL_ORDER_DETAILS: {
      return initialState;
    }

    case SUBMIT_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case SUBMIT_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        loading: false,
      };
    }

    case SUBMIT_ORDER_NUMBER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        selectedOrder: action.payload,
      };
    }
    default:
      return state;
  }
}
