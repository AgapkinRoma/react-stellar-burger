import {
  GET_USER_INFO_FAILED,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
} from "./src/services/pages/get-user-info/action";

const intialState = {
  data: null,
  error: null,
};

export const getUserInfoReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GET_USER_INFO_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
