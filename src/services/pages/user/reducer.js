import { SET_AUTH, SET_USER } from "./action";
const initialState = {
  user: null,
  isAuth: false,
};

export const userLogicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    default:
      return state;
  }
};
