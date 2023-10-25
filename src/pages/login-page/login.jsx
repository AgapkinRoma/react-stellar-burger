import React from "react";
import styles from "./login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
export default function LoginPage() {
  return (
    <form className={styles.loginForm}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <Input placeholder="E-mail" />
      <Input placeholder="Пароль" icon={"ShowIcon"} />
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <div className={styles.loginInstructionContainer}>
      <ul className={styles.loginInstruction}>
        <li className="text text_type_main-default">
          Вы — новый пользователь?
        </li>
        <li className={`text text_type_main-default ${styles.loginActiveText}`}>
          Зарегистрироваться
        </li>
      </ul>
      <ul className={styles.loginInstruction}>
        <li className="text text_type_main-default">Забыли пароль?</li>
        <li className={`text text_type_main-default ${styles.loginActiveText}`}>
          Восстановить пароль
        </li>
      </ul>
      </div>
    </form>
  );
}
