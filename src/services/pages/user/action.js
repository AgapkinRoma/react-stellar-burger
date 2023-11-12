import { onResponse } from "../../../utils/on-response";
import { fetchWithRefresh } from "../../../utils/refresh-token";
export const SET_USER = "SET_USER";
export const SET_AUTH = "SET_AUTH";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const setAuth = (value) => ({
  type: SET_AUTH,
  payload: value,
});

export const submitRegistration = (email, password, name) => {
  return function (dispatch) {
    return fetch("https://norma.nomoreparties.space/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    })
      .then(onResponse)
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

export const submitLogin = (email, password) => {
  return function (dispatch) {
    return fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(onResponse)
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

export const submitLogoutt = () => {
  return function (dispatch) {
    return fetch("https://norma.nomoreparties.space/api/auth/logout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(onResponse)
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

export const getUser = () => {
  return async function (dispatch) {
    try {
      const data = await fetchWithRefresh(
        "https://norma.nomoreparties.space/api/auth/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("accessToken"),
          },
        }
      );

      dispatch(setUser(data.user));
      console.log(data.user);
    } catch (error) {
      console.log(`Упс ошибка - ${error}`);
    }
  };
};

export const changeUserInfo = (name, email) => {
  return async function (dispatch) {
    try {
      const data = await fetchWithRefresh(
        "https://norma.nomoreparties.space/api/auth/user",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ name, email }),
        }
      );

      dispatch(setUser(data.user));
      console.log(data.user);
    } catch (error) {
      console.log(`Упс ошибка - ${error}`);
    }
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
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
