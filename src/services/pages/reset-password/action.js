import { onResponse } from "../../../utils/on-response";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const resetPasswordActionRequest = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordActionSuccess = (data) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordActionFailed = (error) => ({
  type: RESET_PASSWORD_SUCCESS,
  error,
});

export const submitResetPassword = (password, token) => {
  return function (dispatch) {
    dispatch(resetPasswordActionRequest());
    return fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ password, token }),
    })
      .then(onResponse)
      .then((data) => {
        dispatch(resetPasswordActionSuccess(data.data));
        localStorage.removeItem("forgotPassword");
      })
      .catch((error) => {
        console.log(`Ошибка  - ${error}`);
        dispatch(resetPasswordActionFailed(error));
      });
  };
};
