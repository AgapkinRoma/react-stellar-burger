import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./app-header.module.css";
import { setActive } from "../../utils/set-active/set-active";
function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <div className={styles.block}>
          <NavLink to="/" className={setActive}>
            <div className={styles.linkContainer}>
              <BurgerIcon />
              <span>Конструктор</span>
            </div>
          </NavLink>
          <NavLink to="/dsadsad" className={setActive}>
            <div className={styles.linkContainer}>
              <ListIcon type="primary" />
              <span>Лента заказов</span>
            </div>
          </NavLink>
        </div>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <NavLink to="/profile" className={setActive}>
          <div className={styles.linkContainer}>
            <ProfileIcon type="secondary" />
            <span>Личный кабинет</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
