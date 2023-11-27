import {
  ALL_ORDERS_WS_CONNECTING,
  ALL_ORDERS_WS_ERROR,
  ALL_ORDERS_WS_MESSAGE,
  ALL_ORDERS_WS_OPEN,
} from "./actions";

const initialState = {
  status: "OFFLINE",
  data: null,
  error: null,
};

export const allOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "CONNECTING",
      };
    }
    case ALL_ORDERS_WS_OPEN: {
      return {
        ...state,
        status: "ONLINE",
      };
    }
    case ALL_ORDERS_WS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ALL_ORDERS_WS_MESSAGE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
