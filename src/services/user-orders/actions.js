export const USER_ORDERS_CONNECT = "USER_ORDERS_CONNECT";
export const USER_ORDERS_DISCONNECT = "USER_ORDERS_DISCONNECT";

export const USER_ORDERS_WS_CONNECTING = "USER_ORDERS_WS_CONNECTING";
export const USER_ORDERS_WS_OPEN = "USER_ORDERS_WS_OPEN";
export const USER_ORDERS_WS_MESSAGE = "USER_ORDERS_WS_MESSAGE";
export const USER_ORDERS_WS_ERROR = "USER_ORDERS_WS_ERROR";
export const USER_ORDERS_WS_CLOSE = " USER_ORDERS_WS_CLOSE";

export const connect = (url) => ({
  type: USER_ORDERS_CONNECT,
  payload: url,
});

export const disconnect = () => ({
  type: USER_ORDERS_DISCONNECT,
});
