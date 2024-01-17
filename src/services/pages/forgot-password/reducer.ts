import * as ActionTypes from "./constants";
import { TForgotPasswordActions } from "./action";

type TForgotPasswordInitialState = {
  error: string | null;
  loading: boolean;
  email: string|null;
};

const initialState: TForgotPasswordInitialState = {
  error: null,
  loading: false,
  email: null,
};

export const forgotPasswordReducer = (
  state = initialState,
  action: TForgotPasswordActions
): TForgotPasswordInitialState => {
  switch (action.type) {
    case ActionTypes.FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionTypes.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case ActionTypes.FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
