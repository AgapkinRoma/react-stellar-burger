import { onResponse } from "../../../utils/on-response";
import { baseUrl } from "../../../components/app/app";
import { request } from "../../../utils/request";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

const forgotPasswordRequest = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

const forgotPasswordFailed = (error) => ({
  type: FORGOT_PASSWORD_FAILED,
  error,
});

const forgotPasswordSuccess = (email) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: email,
});

export const submitForgotPassword = (email) => {
  return function (dispatch) {
    dispatch(forgotPasswordRequest());
    return request(`${baseUrl}/api/password-reset`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((data) => {
        localStorage.setItem("forgotPassword", true);
        dispatch(forgotPasswordSuccess(data.email));
        console.log(data.email);
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
        dispatch(forgotPasswordFailed(error));
      });
  };
};
