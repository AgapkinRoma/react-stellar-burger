export const ALL_ORDERS_CONNECT = "ALL_ORDERS_CONNECT";
export const ALL_ORDERS_DISCONNECT = "ALL_ORDERS_DISCONNECT";

export const ALL_ORDERS_WS_CONNECTING = "ALL_ORDERS_WS_CONNECTING";
export const ALL_ORDERS_WS_OPEN = "ALL_ORDERS_WS_OPEN";
export const ALL_ORDERS_WS_MESSAGE = "ALL_ORDERS_WS_MESSAGE";
export const ALL_ORDERS_WS_ERROR = "ALL_ORDERS_WS_ERROR";
export const ALL_ORDERS_WS_CLOSE = " ALL_ORDERS_WS_CLOSE";

export const connect = (url) => ({
  type: ALL_ORDERS_CONNECT,
  payload: url,
});

export const disconnect = () => ({
  type: ALL_ORDERS_DISCONNECT,
});
