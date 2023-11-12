import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import formStyles from "../form.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { submitRegistration } from "../../../services/pages/user/action";
export default function RegistrationPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitRegistration = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    dispatch(submitRegistration(email, password, name))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(`Ошибка регистрации: ${error}`);
      });
  };

  return (
    <form className={formStyles.form}>
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <Input ref={nameRef} type="text" placeholder="Имя" />
      <Input ref={emailRef} type="email" placeholder="E-mail" />
      <Input
        ref={passwordRef}
        type="password"
        placeholder="Пароль"
        icon={"ShowIcon"}
      />
      <Button
        onClick={handleSubmitRegistration}
        htmlType="button"
        type="primary"
        size="medium"
      >
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
