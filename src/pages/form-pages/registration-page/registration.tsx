import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import formStyles from "../form.module.css";
import { useTypedDispatch } from "../../../hooks/hooks";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitRegistration } from "../../../services/pages/user/action";
export default function RegistrationPage() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleSubmitRegistration = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitRegistration(email, password, name))
      .then(() => {
        navigate("/");
      })
      .catch((error: string) => {
        console.log(`Ошибка регистрации: ${error}`);
      });
  };

  return (
    <form onSubmit={handleSubmitRegistration} className={formStyles.form}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Имя"
      />
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="E-mail"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
        icon={"ShowIcon"}
      />
      <Button htmlType="submit" type="primary" size="medium">
        Зарегистрироваться
      </Button>
      <div className={formStyles.instructionContainer}>
        <ul className={formStyles.instruction}>
          <li className="text text_type_main-default">Уже зарегистрированы?</li>
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
