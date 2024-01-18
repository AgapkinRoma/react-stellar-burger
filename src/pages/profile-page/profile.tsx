import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getUser, submitLogoutt } from "../../services/pages/user/action";
import { setActive } from "../../utils/set-active/set-active";
import { useTypedDispatch } from "../../hooks/hooks";
export default function ProfilePage() {
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const pathName = location.pathname;
  const handleClickLogout = () => {
    dispatch(submitLogoutt());
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <NavLink to="/profile" end className={setActive}>
            <span className={styles.linkName}>Профиль</span>
          </NavLink>
          <NavLink to="orders" className={setActive}>
            <span className={styles.linkName}>История заказов</span>
          </NavLink>
          <NavLink to="/login" className={setActive}>
            <span onClick={handleClickLogout} className={styles.linkName}>
              Выход
            </span>
          </NavLink>
          {pathName === "/profile" && (
            <p className={styles.tip}>
              В этом разделе вы можете
              <br />
              изменить свои персональные данные
            </p>
          )}
          {pathName === "/profile/orders" && (
            <p className={styles.tip}>
              В этом разделе вы можете
              <br />
              посмотреть свою историю заказов
            </p>
          )}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
