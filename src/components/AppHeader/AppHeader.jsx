import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.container}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </div>
          <div className={styles.container}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default  text_color_inactive">
              Лента заказов
            </p>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <div className={styles.container}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default  text_color_inactive">
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
