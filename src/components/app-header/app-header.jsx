import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./app-header.module.css";
import { setActive } from "../../utils/set-active/set-active";
function AppHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const setType = (url, nestedUrl) => {
    return pathName === url || nestedUrl ? "primary" : "secondary";
  };
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <div className={styles.block}>
          <NavLink to="/" className={setActive}>
            <div className={styles.linkContainer}>
              <BurgerIcon type={setType("/")} />
              <span>Конструктор</span>
            </div>
          </NavLink>
          <NavLink to="/feed" className={setActive}>
            <div className={styles.linkContainer}>
              <ListIcon type={setType("/orders-list")} />
              <span>Лента заказов</span>
            </div>
          </NavLink>
        </div>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <NavLink to="/profile" className={setActive}>
          <div className={styles.linkContainer}>
            <ProfileIcon type={setType("/profile", "/profile/orders")} />
            <span>Личный кабинет</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
