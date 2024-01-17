import { IAllOrdersData } from "../all-orders/reducer";
import * as ActionTypes from "./constants";
interface IUserOrdersConnectAction {
  type: typeof ActionTypes.USER_ORDERS_CONNECT;
  payload: string;
}

interface IUserOrdersDisconnectAction {
  type: typeof ActionTypes.USER_ORDERS_DISCONNECT;
}

interface IUserOrdersWsConnectingAction {
  type: typeof ActionTypes.USER_ORDERS_WS_CONNECTING;
}

interface IUserOrdersWsOpenAction {
  type: typeof ActionTypes.USER_ORDERS_WS_OPEN;
}

interface IUserOrdersWsCloseAction {
  type: typeof ActionTypes.USER_ORDERS_WS_CLOSE;
}

interface IUserOrdersWsMessageAction {
  type: typeof ActionTypes.USER_ORDERS_WS_MESSAGE;
  payload: IAllOrdersData;
}

interface IUserOrdersWsErrorAction {
  type: typeof ActionTypes.USER_ORDERS_WS_ERROR;
  payload: string;
}

export type TUserOrdersActions =
  | IUserOrdersConnectAction
  | IUserOrdersDisconnectAction
  | IUserOrdersWsConnectingAction
  | IUserOrdersWsOpenAction
  | IUserOrdersWsCloseAction
  | IUserOrdersWsMessageAction
  | IUserOrdersWsErrorAction;

export const connect = (url: string) => ({
  type: ActionTypes.USER_ORDERS_CONNECT,
  payload: url,
});

export const disconnect = () => ({
  type: ActionTypes.USER_ORDERS_DISCONNECT,
});
