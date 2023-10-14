import {
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_MODAL_ORDER_DETAILS,
  SET_ORDER_NUMBER,
} from "./actions";

const initialState = {
  ordersModal: false,
  orderNumber: null,
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

    case SET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: action.payload,
      };
    }
    default:
      return state;
  }
}
