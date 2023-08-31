import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItems from "./constructor-items/constructor-items";
function BurgerConstructor() {
  return (
    <div className={`${styles.componentContainer} mt-25`}>
      <ConstructorItems></ConstructorItems>
      <div className={`${styles.totalContainer} mt-10`}>
        <div className={styles.costContainer}>
          <p className="text text_type_digits-medium">610</p>

          <CurrencyIcon></CurrencyIcon>
        </div>

        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
