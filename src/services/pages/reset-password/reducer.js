import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from "./action";

const initialState = {
  error: null,
  loading: false,
  data: null,
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case RESET_PASSWORD_FAILED: {
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
