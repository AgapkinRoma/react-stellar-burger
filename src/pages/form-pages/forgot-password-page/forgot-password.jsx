import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { submitForgotPassword } from "../../../services/pages/forgot-password/action";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForgotPassword = (e) => {
    e.preventDefault();

    dispatch(submitForgotPassword(email))
      .then(() => navigate("/reset-password"))
      .catch((error) => console.log(`Ошибка регистрации: ${error}`));
  };
  return (
    <form onSubmit={handleForgotPassword} className={formStyles.form}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Укажите E-mail"
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
