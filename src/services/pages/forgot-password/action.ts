import { baseUrl } from "../../../components/app/app";
import { request } from "../../../utils/request";
import * as ActionTypes from "./constants";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { IUserData } from "../user/reducer";
import { AppThunk } from "../../action-types/app-actions";
interface IForgotPasswordRequestAction {
  type: typeof ActionTypes.FORGOT_PASSWORD_REQUEST;
}

interface IForgotPasswordSuccessAction {
  type: typeof ActionTypes.FORGOT_PASSWORD_SUCCESS;
  payload: string;
}

interface IForgotPasswordFailedAction {
  type: typeof ActionTypes.FORGOT_PASSWORD_FAILED;
  payload: string;
}

export type TForgotPasswordActions =
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction;

const forgotPasswordRequest = () => ({
  type: ActionTypes.FORGOT_PASSWORD_REQUEST,
});

const forgotPasswordFailed = (error: string) => ({
  type: ActionTypes.FORGOT_PASSWORD_FAILED,
  payload: error,
});

const forgotPasswordSuccess = (email: string) => ({
  type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
  payload: email,
});

export const submitForgotPassword = (
  email: string
): AppThunk<Promise<void>> => {
  return  function (dispatch) {
    dispatch(forgotPasswordRequest());
    return request<IUserData>(`${baseUrl}/api/password-reset`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((data) => {
        localStorage.setItem("forgotPassword", "true");
        dispatch(forgotPasswordSuccess(data.email));
        console.log(data.email);
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
        dispatch(forgotPasswordFailed(error));
      });
  };
};
