import { TUserActions } from "./action";
import * as ActionTypes from "./constants";

export type IUserData = {
  name: string;
  password: string;
  email: string;
};

type TUserInitialState = {
  user: IUserData | null;
  isAuth: boolean;
};

const initialState: TUserInitialState = {
  user: null,
  isAuth: false,
};

export const userLogicReducer = (
  state = initialState,
  action: TUserActions
): TUserInitialState => {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionTypes.SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    default:
      return state;
  }
};
