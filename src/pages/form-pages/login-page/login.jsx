import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../../services/pages/user/action";
export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitLoginHandler = () => {
    const login = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(submitLogin(login, password))
      .then(() => navigate("/"))
      .catch((error) => console.log(`Ошибка при входе - ${error}`));
  };
  return (
    <form className={formStyles.form}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <Input ref={emailRef} type="email" placeholder="E-mail" />
      <Input
        ref={passwordRef}
        type="password"
        placeholder="Пароль"
        icon={"ShowIcon"}
      />
      <Button
        onClick={submitLoginHandler}
        htmlType="button"
        type="primary"
        size="medium"
      >
        Войти
      </Button>
      <div className={formStyles.instructionContainer}>
        <ul className={formStyles.instruction}>
          <li className="text text_type_main-default">
            Вы — новый пользователь?
          </li>
          <Link
            to="/registration"
            className={`text text_type_main-default ${formStyles.activeText}`}
          >
            Зарегистрироваться
          </Link>
        </ul>
        <ul className={formStyles.instruction}>
          <li className="text text_type_main-default">Забыли пароль?</li>
          <Link
            to="/forgot-password"
            className={`text text_type_main-default ${formStyles.activeText}`}
          >
            Восстановить пароль
          </Link>
        </ul>
      </div>
    </form>
  );
}
