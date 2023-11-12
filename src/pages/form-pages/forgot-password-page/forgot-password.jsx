import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { submitForgotPassword } from "../../../services/pages/forgot-password/action";

export default function ForgotPasswordPage() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    const input = inputRef.current.value;
    dispatch(submitForgotPassword(input))
      .then(() => navigate("/reset-password"))
      .catch((error) => console.log(`Ошибка регистрации: ${error}`));
  };
  return (
    <form className={formStyles.form}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <Input ref={inputRef} type="email" placeholder="Укажите E-mail" />
      <Button
        onClick={handleForgotPassword}
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
