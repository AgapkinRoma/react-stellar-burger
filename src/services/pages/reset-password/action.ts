import { baseUrl } from "../../../components/app/app";
import { request } from "../../../utils/request";
import * as ActionTypes from "./constants";
import { IResetPasswordData } from "./reducer";
import { RootState } from "../../store";
import { ThunkAction } from "redux-thunk";
interface IResetPasswordActionRequest {
  type: typeof ActionTypes.RESET_PASSWORD_REQUEST;
}

interface IResetPasswordActionSuccess {
  type: typeof ActionTypes.RESET_PASSWORD_SUCCESS;
  payload: IResetPasswordData;
}

interface IResetPasswordActionFailed {
  type: typeof ActionTypes.RESET_PASSWORD_FAILED;
  payload: string;
}

export type TResetPasswordActions =
  | IResetPasswordActionRequest
  | IResetPasswordActionSuccess
  | IResetPasswordActionFailed;

export const resetPasswordActionRequest = () => ({
  type: ActionTypes.RESET_PASSWORD_REQUEST,
});

export const resetPasswordActionSuccess = (data: IResetPasswordData) => ({
  type: ActionTypes.RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordActionFailed = (error: string) => ({
  type: ActionTypes.RESET_PASSWORD_FAILED,
  payload: error,
});

export const submitResetPassword = (
  password: string,
  token: string
): ThunkAction<Promise<void>, RootState, unknown, TResetPasswordActions> => {
  return function (dispatch) {
    dispatch(resetPasswordActionRequest());
    return request<IResetPasswordData>(`${baseUrl}/api/password-reset/reset`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ password, token }),
    })
      .then((data) => {
        dispatch(resetPasswordActionSuccess(data));
        localStorage.removeItem("forgotPassword");
      })
      .catch((error) => {
        console.log(`Ошибка  - ${error}`);
        dispatch(resetPasswordActionFailed(error));
        Promise.reject()
      });
  };
};
