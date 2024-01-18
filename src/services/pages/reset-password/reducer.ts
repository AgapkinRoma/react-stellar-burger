import { TResetPasswordActions } from "./action";
import * as ActionTypes from "./constants";
export interface IResetPasswordData {
  email: string;
  token: string;
}

type TResetPasswordInitialState = {
  error: string | null;
  loading: boolean;
  data: IResetPasswordData | null;
};

const initialState: TResetPasswordInitialState = {
  error: null,
  loading: false,
  data: null,
};

export const resetPasswordReducer = (
  state = initialState,
  action: TResetPasswordActions
) => {
  switch (action.type) {
    case ActionTypes.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ActionTypes.RESET_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
