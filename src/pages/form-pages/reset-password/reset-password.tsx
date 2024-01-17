import React, { FormEvent, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitResetPassword } from "../../../services/pages/reset-password/action";
import { useTypedDispatch } from "../../../hooks/hooks";
export default function ResetPasswordPage() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const handleResetPassword = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitResetPassword(password, token))
      .then(() => navigate("/login"))
      .catch((error:string) => console.log(error));
  };
  if (!localStorage.getItem("forgotPassword")) {
    return <Navigate to="/" />;
  }
  return (
    <form onSubmit={handleResetPassword} className={formStyles.form}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Введите новый пароль"
      />
      <PasswordInput
        onChange={(e) => setToken(e.target.value)}
        value={token}
        placeholder="Введите код из письма"
      />
      <Button htmlType="submit" type="primary" size="medium">
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
