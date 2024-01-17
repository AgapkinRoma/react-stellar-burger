import { fetchWithRefresh } from "../../../utils/refresh-token";
import { baseUrl } from "../../../components/app/app";
import { request } from "../../../utils/request";
import * as ActionTypes from "./constants";
import { IUserData } from "./reducer";
import { RootState } from "../../store";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react";
import { AppActions, AppThunk } from "../../action-types/app-actions";
interface ISetUserAction {
  type: typeof ActionTypes.SET_USER;
  payload: IUserData | null;
}
interface ISetAuthAction {
  type: typeof ActionTypes.SET_AUTH;
  payload: boolean;
}

export type TUserActions = ISetUserAction | ISetAuthAction;
export interface IMyData {
  user: IUserData;
  accessToken: string;
  refreshToken: string;
}
const setUser = (user: IUserData | null) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});

const setAuth = (value: boolean) => ({
  type: ActionTypes.SET_AUTH,
  payload: value,
});

export const submitRegistration = (
  email: string,
  password: string,
  name: string
): ThunkAction<Promise<void>, RootState, unknown, TUserActions> => {
  return function (dispatch) {
    return request<IMyData>(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    })
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch(setUser(data.user));
        dispatch(setAuth(true));
      })
      .catch((error) => {
        console.log(`Ошибка регистрации - ${error}`);
      });
  };
};

export const submitLogin = (
  email: string,
  password: string
): ThunkAction<Promise<void>, RootState, unknown, TUserActions> => {
  return function (dispatch) {
    return request<IMyData>(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch(setUser(data.user));
        dispatch(setAuth(true));
      })
      .catch((error) => {
        console.log(`Ошибка -${error}`);
      });
  };
};

export const submitLogoutt = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  TUserActions
> => {
  return function (dispatch) {
    return request(`${baseUrl}/api/auth/logout`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(() => {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        dispatch(setUser(null));
        dispatch(setAuth(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUser = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  TUserActions
> => {
  return async function (dispatch) {
    try {
      const data = await fetchWithRefresh(`${baseUrl}/api/auth/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("accessToken") || "",
        },
      });
      console.log(data, "data23131");
      dispatch(setUser(data.user));
      console.log(data.user);
    } catch (error) {
      console.log(`Упс ошибка - ${error}`);
    }
  };
};

export const changeUserInfo = (
  name: string,
  email: string
): ThunkAction<Promise<void>, RootState, unknown, TUserActions> => {
  return async function (dispatch) {
    try {
      const data = await fetchWithRefresh(`${baseUrl}/api/auth/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("accessToken") || "",
        },
        body: JSON.stringify({ name, email }),
      });

      dispatch(setUser(data.user));
      console.log(data.user);
    } catch (error) {
      console.log(`Упс ошибка - ${error}`);
    }
  };
};

export const checkUserAuth = (): AppThunk<Promise<void>> => {
  return async (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .then(() => dispatch(setAuth(true)))
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
          dispatch(setAuth(true));
        });
    } else {
      dispatch(setAuth(true));
    }
  };
};
