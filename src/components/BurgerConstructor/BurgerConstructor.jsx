import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunDefault from "../../images/bun-default.svg";
import bunPurple from "../../images/bun-purple.svg";
import sauceSpicy from "../../images/sauce-02.svg";
import sauceSpace from "../../images/sauce-44.svg";
import sauceTradition from "../../images/sauce-03.svg";
import sauceAlien from "../../images/sauce-01.svg";
import fillet from "../../images/fillet.svg";
import immortalMeat from "../../images/immortal-meat.svg";
import beefMeteor from "../../images/meteor-beef.svg";
import marsBioCutlet from "../../images/mars-bio-cutlet.svg";
import falianFruits from "../../images/falian-frut.svg";
import marsCrystalls from "../../images/mars-crystall.svg";
import mineralRings from "../../images/crystall-rings.svg";
import miniSalad from "../../images/mini-salad.svg";
import asteroidCheese from "../../images/cheese.svg";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
function BurgerConstructor() {
  return (
    <div className={`${styles.componentContainer} mt-25`}>
      <div className={styles.constructorContainer}>
        <div className={styles.container}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={bunDefault}
          />
        </div>
        <div className={`${styles.scrollContainer} custom-scroll`}>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={sauceTradition}
            ></ConstructorElement>
          </div>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={immortalMeat}
            />
          </div>

          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={falianFruits}
            />
          </div>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={immortalMeat}
            />
          </div>
          <div className={styles.iconContainer}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={300}
              thumbnail={fillet}
            />
          </div>
        </div>
        <div className={styles.container}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bunDefault}
          />
        </div>
      </div>

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
