import { Middleware } from "redux";
import { refreshToken } from "../../utils/refresh-token";
import { RootState } from "../store";
export interface IWsActionTypes {
  wsConnect: string;
  wsDisconnect: string;
  wsConnecting: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}
export const socketMiddleware = (
  wsActions: IWsActionTypes
): Middleware<RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let reconnectTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsConnect,
        wsDisconnect,
        wsConnecting,
     
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsConnect) {
        socket = new WebSocket(action.payload);
        dispatch({ type: wsConnecting });
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: "ERROR" });
          clearTimeout(reconnectTimeout);
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (
            parsedData.token_expired &&
            parsedData.message === "Invalid or missing token"
          ) {
            refreshToken();
          }
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose });
          if (!reconnectTimeout) {
            reconnectTimeout = setTimeout(() => {
              socket = new WebSocket(action.payload);
              dispatch({ type: wsConnecting });
              reconnectTimeout = undefined;
            }, 5000);
          }
        };

        // if (wsSendMessage && type === wsSendMessage) {
        //   socket.send(JSON.stringify(action.payload));
        // }
        // if (type === wsDisconnect) {
        //   socket.close();
        //   socket = null;
        // }
      }

      next(action);
    };
  };
};
