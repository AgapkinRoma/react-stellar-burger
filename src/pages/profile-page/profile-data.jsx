import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { changeUserInfo } from "../../services/pages/user/action";
import styles from "./profile.module.css";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function ProfileData() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogicReducer.user);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleChangeInfo = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    dispatch(changeUserInfo(name, email));
  };
  return (
    <form className={styles.form}>
      {userInfo && (
        <>
          <Input
            ref={nameRef}
            defaultValue={userInfo.name}
            placeholder="Имя"
            type="text"
            icon={"EditIcon"}
          />
          <Input
            ref={emailRef}
            defaultValue={userInfo.email}
            placeholder="Логин"
            type="email"
            icon={"EditIcon"}
          />
          <PasswordInput />
        </>
      )}
      <div className={styles.buttonContainer}>
        <Button type="secondary">Отмена</Button>
        <Button onClick={handleChangeInfo}>Сохранить</Button>
      </div>
    </form>
  );
}
