import { refreshToken } from "../../utils/refresh-token";
export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let reconnectTimeout = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsConnect,
        wsDisconnect,
        wsConnecting,
        wsSendMessage,
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
              reconnectTimeout = null;
            }, 5000);
          }
        };

        if (wsSendMessage && type === wsSendMessage) {
          socket.send(JSON.stringify(action.payload));
        }
        if (type === wsDisconnect) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
