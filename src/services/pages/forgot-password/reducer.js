import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "./action";

const initialState = {
  error: null,
  loading: false,
  email: null,
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
        erorr: null,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
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
