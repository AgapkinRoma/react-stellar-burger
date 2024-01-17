import styles from "./burger-ingridients.module.css";
import React, { useRef, useCallback } from "react";
import Ingridients from "./ingridients/ingridients";
import { switchTabAction } from "../../services/burger-ingredients/actions";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TypedUseSelector, useTypedDispatch } from "../../hooks/hooks";
import { IIngredientsState } from "../../services/burger-constructor/reducer";

function BurgerIngridients() {
  const ingredients = TypedUseSelector(
    (state) => state.ingredientsReducer.ingredients
  );
  const selectedIngredient = TypedUseSelector(
    (state) => state.ingredientsReducer.selectedIngredient
  );
  const constructorIngredients = TypedUseSelector(
    (state) => state.constructorIngredientsReducer.ingredients
  );
  const constructorBun = TypedUseSelector(
    (state) => state.constructorIngredientsReducer.bun
  );
  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const mains = ingredients.filter((item) => item.type === "main");
  const tabsRef = useRef<HTMLDivElement>(null);
  const bunsRef = useRef<HTMLDivElement>(null);
  const saucesRef = useRef<HTMLDivElement>(null);
  const topingRef = useRef<HTMLDivElement>(null);
  const currentTab = TypedUseSelector((state) => state.ingredientsReducer.tab);

  const dispatch = useTypedDispatch();

  function handleScroll() {
    const tabsBottom = tabsRef?.current?.getBoundingClientRect().bottom;
    const bunsTop = bunsRef?.current?.getBoundingClientRect().top;
    const saucesTop = saucesRef?.current?.getBoundingClientRect().top;
    const topingTop = topingRef?.current?.getBoundingClientRect().top;
    if (tabsBottom && bunsTop && saucesTop && topingTop) {
      const bunsDelta = Math.abs(bunsTop - tabsBottom);
      const saucesDelta = Math.abs(saucesTop - tabsBottom);
      const topingDelta = Math.abs(topingTop - tabsBottom);
      const minDelta = Math.min(bunsDelta, saucesDelta, topingDelta);

      const tab =
        minDelta === bunsDelta
          ? "buns"
          : minDelta === saucesDelta
          ? "sauces"
          : "topping";
      if (tab !== currentTab) {
        dispatch(switchTabAction(tab));
      }
    }
  }
  const switchTabOnClick = (value: string) => {
    dispatch(switchTabAction(value));
    switch (value) {
      case "buns":
        {
          bunsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
        break;
      case "sauces":
        {
          saucesRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
        break;
      case "topping": {
        topingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        break;
      }
      default:
        break;
    }
  };
  const setCounter = useCallback(
    (item: IIngredientsState) => {
      if (constructorBun && item.type === "bun") {
        return constructorBun._id === item._id ? 2 : 0;
      } else if (constructorBun !== null) {
        return constructorIngredients.filter(
          (ingred) => ingred._id === item._id
        ).length;
      } else {
        return 0;
      }
    },
    [constructorIngredients, constructorBun]
  );
  return (
    <div className={`${styles.componentContainer} mt-10`}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <div ref={tabsRef} className={`${styles.tabContainer} mt-5`}>
        <Tab
          value="buns"
          active={currentTab === "buns"}
          onClick={switchTabOnClick}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={switchTabOnClick}
        >
          Соусы
        </Tab>
        <Tab
          value="topping"
          active={currentTab === "topping"}
          onClick={switchTabOnClick}
        >
          Начинки
        </Tab>
      </div>
      <div
        onScroll={handleScroll}
        className={`${styles.scrollContainer} custom-scroll`}
      >
        <p ref={bunsRef} className="text text_type_main-medium mt-10">
          Булки
        </p>
        <div className={styles.ingridientContainer}>
          {buns.map((item) => (
            <Ingridients key={item._id} item={item} count={setCounter(item)} />
          ))}
        </div>
        <p ref={saucesRef} className="text text_type_main-medium mt-10">
          Соусы
        </p>
        <div className={styles.ingridientContainer}>
          {sauces &&
            sauces.map((item) => (
              <Ingridients
                key={item._id}
                item={item}
                count={setCounter(item)}
              />
            ))}
        </div>
        <p ref={topingRef} className="text text_type_main-medium mt-10">
          Начинка
        </p>
        <div className={styles.ingridientContainer}>
          {mains &&
            mains.map((item) => (
              <Ingridients
                key={item._id}
                item={item}
                count={setCounter(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngridients;
