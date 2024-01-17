import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import formStyles from "../form.module.css";
import { FormEvent } from "react";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitLogin } from "../../../services/pages/user/action";
import {useTypedDispatch } from "../../../hooks/hooks";
export default function LoginPage() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitLoginHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitLogin(login, password))
      .then(() => navigate("/"))
      .catch((error:string) => console.log(`Ошибка при входе - ${error}`));
  };
  return (
    <form onSubmit={submitLoginHandler} className={formStyles.form}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <Input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button htmlType="submit" type="primary" size="medium">
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
