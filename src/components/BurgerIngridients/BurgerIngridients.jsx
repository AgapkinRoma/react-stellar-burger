import styles from "./BurgerIngridients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
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
import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngridients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={`${styles.componentContainer} mt-10`}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className={`${styles.tabContainer} mt-5`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.scrollContainer} custom-scroll`}>
        <div className="mt-10">
          <p className="text text_type_main-medium">Булки</p>
          <div className={styles.ingridientContainer}>
            <div className={styles.ingridientBlock}>
              <Counter count={1} size="default" extraClass="m-1" />
              <img src={bunDefault} alt="Краторная булка N-200i"></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">20</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Краторная булка N-200i.
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={bunPurple} alt="Флюоресцентная булка R2-D3"></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">20</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Флюоресцентная булка R2-D3
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text text_type_main-medium">Соусы</p>
          <div className={styles.ingridientContainer}>
            <div className={styles.ingridientBlock}>
              <img src={sauceSpicy} alt="Соус Spicy-X"></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">30</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">Соус Spicy-X</p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={sauceSpace} alt='Соус фирменный Space Sauce'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">30</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Соус фирменный Space Sauce
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <Counter count={1} size="default" extraClass="m-1" />
              <img src={sauceTradition} alt='Соус традиционный галактический'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">30</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Соус традиционный галактический
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={sauceAlien} alt='Соус c шипами Антарианского плоскоходца'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">30</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Соус c шипами Антарианского плоскоходца
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text text_type_main-medium">Начинка</p>
          <div className={styles.ingridientContainer}>
            <div className={styles.ingridientBlock}>
              <img src={fillet} alt='Филе Люминесцентного тетраодонтимформа'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">300</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Филе Люминесцентного тетраодонтимформа
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={immortalMeat} alt='Мясо бессмертных моллюсков Protostomia'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">300</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Мясо бессмертных моллюсков Protostomia
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={beefMeteor} alt='Говяжий метеорит'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">300</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">Говяжий метеорит</p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={marsBioCutlet} alt='Биокотлета из марсианской Магнолии'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">300</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Биокотлета из марсианской Магнолии
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={falianFruits} alt='Плоды Фалленианского дерева'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">80</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Плоды Фалленианского дерева
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={marsCrystalls} alt='Кристаллы марсианских альфа-сахаридов'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">80</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Кристаллы марсианских альфа-сахаридов
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={mineralRings}></img>
              <div className={styles.costContainer} alt='Хрустящие минеральные кольца'>
                <p className="text text_type_digits-default">80</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Хрустящие минеральные кольца
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={miniSalad} alt='Мини-салат Экзо-Плантаго'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">80</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
                Мини-салат Экзо-Плантаго
              </p>
            </div>
            <div className={styles.ingridientBlock}>
              <img src={asteroidCheese} alt='Сыр с астероидной плесенью'></img>
              <div className={styles.costContainer}>
                <p className="text text_type_digits-default">80</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">
              Сыр с астероидной плесенью
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngridients;
