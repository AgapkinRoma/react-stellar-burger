import { useState } from "react";
import { FormEvent } from "react";
import { changeUserInfo } from "../../services/pages/user/action";
import styles from "./profile.module.css";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useTypedDispatch, useAppSelector } from "../../hooks/hooks";

export default function ProfileData() {
  const dispatch = useTypedDispatch();
  const userInfo = useAppSelector((state) => state.userLogicReducer.user);
  
  const [name, setName] = useState(userInfo? userInfo.name : '');
  const [email, setEmail] = useState(userInfo? userInfo.email : '');
  
  const handleChangeInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeUserInfo(name, email));
  };
  return (
    <form onSubmit={handleChangeInfo} className={styles.form}>
      {userInfo && (
        <>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            type="text"
            icon={"EditIcon"}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Логин"
            type="email"
            icon={"EditIcon"}
          />
          <PasswordInput onChange={() => {}} readOnly value={"********"} />
        </>
      )}
      <div className={styles.buttonContainer}>
        <Button htmlType="reset" type="secondary">
          Отмена
        </Button>
        <Button htmlType="submit">Сохранить</Button>
      </div>
    </form>
  );
}
