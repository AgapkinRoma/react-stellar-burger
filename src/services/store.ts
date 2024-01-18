import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/socket-middleware";
import { IWsActionTypes } from "./middleware/socket-middleware";
import {
  ALL_ORDERS_CONNECT,
  ALL_ORDERS_DISCONNECT,
  ALL_ORDERS_WS_CLOSE,
  ALL_ORDERS_WS_CONNECTING,
  ALL_ORDERS_WS_ERROR,
  ALL_ORDERS_WS_MESSAGE,
  ALL_ORDERS_WS_OPEN,
} from "./all-orders/constants";

import {
  USER_ORDERS_CONNECT,
  USER_ORDERS_DISCONNECT,
  USER_ORDERS_WS_CLOSE,
  USER_ORDERS_WS_CONNECTING,
  USER_ORDERS_WS_ERROR,
  USER_ORDERS_WS_MESSAGE,
  USER_ORDERS_WS_OPEN,
} from "./user-orders/constants";

const liveOrdersMiddleWare = socketMiddleware({
  wsConnect: ALL_ORDERS_CONNECT,
  wsDisconnect: ALL_ORDERS_DISCONNECT,
  wsConnecting: ALL_ORDERS_WS_CONNECTING,
  onOpen: ALL_ORDERS_WS_OPEN,
  onClose: ALL_ORDERS_WS_CLOSE,
  onError: ALL_ORDERS_WS_ERROR,
  onMessage: ALL_ORDERS_WS_MESSAGE,
});
const liveUserOrdersMiddleWare = socketMiddleware({
  wsConnect: USER_ORDERS_CONNECT,
  wsDisconnect: USER_ORDERS_DISCONNECT,
  wsConnecting: USER_ORDERS_WS_CONNECTING,
  onOpen: USER_ORDERS_WS_OPEN,
  onClose: USER_ORDERS_WS_CLOSE,
  onError: USER_ORDERS_WS_ERROR,
  onMessage: USER_ORDERS_WS_MESSAGE,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      liveOrdersMiddleWare,
      liveUserOrdersMiddleWare
    ),
});
