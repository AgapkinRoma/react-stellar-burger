import styles from "./BurgerIngridients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import bunDefault from "../../images/name=Краторная булка N-200inormal.svg";
import bunPurple from "../../images/bun-01.svg";
import sauceSpicy from "../../images/sauce-02.svg";
import sauceSpace from "../../images/sauce-44.svg";
import sauceTradition from "../../images/sauce-03.svg";
import sauceAlien from "../../images/sauce-01.svg";
import fillet from "../../images/name=Филе Люминесцентного тетраодонтимформаnormal.svg";
import immortalMeat from "../../images/name=Мясо бессмертных моллюсков Protostomianormal.svg";
import beefMeteor from "../../images/name=Говяжий метеорит (отбивная)normal.svg";
import marsBioCutlet from "../../images/name=Биокотлета из марсианской Магнолииnormal.svg";
import falianFruits from "../../images/name=Плоды фалленианского дереваnormal.svg";
import marsCrystalls from "../../images/name=Кристаллы марсианских альфа-сахаридовnormal.svg";
import mineralRings from "../../images/name=Хрустящие минеральные кольцаnormal.svg";
import miniSalad from "../../images/name=Мини-салат Экзо-Плантагоnormal.svg";
import asteroidCheese from "../../images/name=Сыр с астероидной плесеньюnormal.svg";
import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngridients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className='mt-10' style={{ maxWidth: "600px" }}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <div style={{ display: "flex" }} className="mt-5">
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
      <div style={{overflowX:'hidden',overflowY:'scroll',
      maxHeight:'700px'}} className="custom-scroll">
      <div className="mt-10">
        <p className="text text_type_main-medium">Булки</p>


        <div className={styles.ingridientContainer}>
          <div className={styles.ingridientBlock}>
          <Counter count={1} size="default" extraClass="m-1" />
            <img src={bunDefault}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Краторная булка N-200i.
            </p>
          </div>
          <div className={styles.ingridientBlock}>
          
            <img src={bunPurple}></img>
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
            <img src={sauceSpicy}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Соус Spicy-X</p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={sauceSpace}></img>
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
            <img src={sauceTradition}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Соус традиционный галактический
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={sauceAlien}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Соус c шипами Антарианского плоскоходца
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text text_type_main-medium">Начинка</p>
        <div className={styles.ingridientContainer}>
          <div className={styles.ingridientBlock}>
            <img src={fillet}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">300</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Филе Люминесцентного тетраодонтимформа
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={immortalMeat}></img>
            <div className={styles.costContainer}>
              <p
                style={{ textAlign: "center" }}
                className="text text_type_digits-default"
              >
                300
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Мясо бессмертных моллюсков Protostomia
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={beefMeteor}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">300</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Говяжий метеорит
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={marsBioCutlet}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">300</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Биокотлета из марсианской Магнолии
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={falianFruits}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">80</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Плоды Фалленианского дерева
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={marsCrystalls}></img>
            <div className={styles.costContainer}>
              <p
                style={{ textAlign: "center" }}
                className="text text_type_digits-default"
              >
                80
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Кристаллы марсианских альфа-сахаридов
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={mineralRings}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">80</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Хрустящие минеральные кольца
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={miniSalad}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">80</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
              Мини-салат Экзо-Плантаго
            </p>
          </div>
          <div className={styles.ingridientBlock}>
            <img src={asteroidCheese}></img>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-default">80</p>
              <CurrencyIcon type="primary" />
            </div>
            <p
              style={{ textAlign: "center" }}
              className="text text_type_main-default"
            >
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
