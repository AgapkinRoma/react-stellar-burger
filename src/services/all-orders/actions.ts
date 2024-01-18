import * as ActionTypes from "./constants";
import { IAllOrdersData } from "./reducer";

export interface IAllOrdersConnectAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_CONNECT;
  payload: string;
}

export interface IAllOrdersDisconnecttAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_DISCONNECT;
}

export interface IAllOrdersWsConnectingAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_WS_CONNECTING;
}

export interface IAllOrdersWsOpenAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_WS_OPEN;
}

export interface IAllOrdersWsMessageAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_WS_MESSAGE;
  payload: IAllOrdersData;
}

export interface IAllOrdersWsErrorAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_WS_ERROR;
  payload: string;
}

export interface IAllOrdersWsCloseAction {
  readonly type: typeof ActionTypes.ALL_ORDERS_WS_CLOSE;
}

export type TAllOrdersActions =
  | IAllOrdersConnectAction
  | IAllOrdersDisconnecttAction
  | IAllOrdersWsCloseAction
  | IAllOrdersWsConnectingAction
  | IAllOrdersWsErrorAction
  | IAllOrdersWsMessageAction
  | IAllOrdersWsOpenAction;

export const connect = (url: string) => ({
  type: ActionTypes.ALL_ORDERS_CONNECT,
  payload: url,
});

export const disconnect = () => ({
  type: ActionTypes.ALL_ORDERS_DISCONNECT,
});
