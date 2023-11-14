import React, { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { submitResetPassword } from "../../../services/pages/reset-password/action";
export default function ResetPasswordPage() {
  const passwordRef = useRef(null);
  const tokenRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleResetPassword = () => {
    const password = passwordRef.current.value;
    const token = tokenRef.current.value;

    dispatch(submitResetPassword(password, token))
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };
  if (!localStorage.getItem("forgotPassword")) {
    return <Navigate to="/" />;
  }
  return (
    <form className={formStyles.form}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <Input
        ref={passwordRef}
        icon={"ShowIcon"}
        type="password"
        placeholder="Введите новый пароль"
      />
      <Input
        ref={tokenRef}
        type="password"
        placeholder="Введите код из письма"
      />
      <Button
        onClick={handleResetPassword}
        htmlType="button"
        type="primary"
        size="medium"
      >
        Восстановить
      </Button>
      <div className={formStyles.instructionContainer}>
        <ul className={formStyles.instruction}>
          <li className="text text_type_main-default">Вспомнили пароль?</li>
          <Link
            to="/login"
            className={`text text_type_main-default ${formStyles.activeText}`}
          >
            Войти
          </Link>
        </ul>
      </div>
    </form>
  );
}
