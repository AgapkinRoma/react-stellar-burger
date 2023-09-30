import React, { useState, useContext, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItems from "./constructor-items/constructor-items";
import Modal from "../modals/modal/modal";
import OrderDetails from "../modals/order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { ConstructorContext } from "../../services/constructorContext";

function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { costState, dispatch, constructorIngredients } =
    useContext(ConstructorContext);
  const bun = constructorIngredients.bun;
  const ingredients = constructorIngredients.ingredients;
  const [orderNumber, setOrderNumber] = useState(null);
  function handleOrderDetails() {
    const ingredId = constructorIngredients.ingredients.map((item) => item._id);
    const bunId = constructorIngredients.bun._id;
    const ingredientsId = [bunId, ...ingredId, bunId];

    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ingredients: ingredientsId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderNumber(data.order.number);
      })
      .catch((error) => {
        console.log(`Упс ошибка - ${error}`);
      });
    openModal();
  }

  useEffect(() => {
    if (bun) {
      dispatch({ type: "add", payload: bun.price * 2 });
    }
    if (ingredients) {
      dispatch({
        type: "add",
        payload: ingredients.reduce((cost, item) => cost + item.price, 0),
      });
    }
  }, [constructorIngredients]);

  return (
    <div className={`${styles.componentContainer} mt-25`}>
      <ConstructorItems />
      <div className={`${styles.totalContainer} mt-10`}>
        <div className={styles.costContainer}>
          <p className="text text_type_digits-medium">{costState}</p>
          <CurrencyIcon />
        </div>
        <Button
          onClick={handleOrderDetails}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
