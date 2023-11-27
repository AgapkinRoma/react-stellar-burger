import {
  USER_ORDERS_WS_CONNECTING,
  USER_ORDERS_WS_ERROR,
  USER_ORDERS_WS_MESSAGE,
  USER_ORDERS_WS_OPEN,
} from "./actions";

const initialState = {
  status: "OFFLINE",
  data: null,
  error: null,
};

export const userOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ORDERS_WS_CONNECTING: {
      return {
        ...state,
        status: "CONNECTING",
      };
    }
    case USER_ORDERS_WS_OPEN: {
      return {
        ...state,
        status: "ONLINE",
      };
    }
    case USER_ORDERS_WS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case USER_ORDERS_WS_MESSAGE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
