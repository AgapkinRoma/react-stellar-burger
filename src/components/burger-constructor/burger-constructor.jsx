import React, { useState, useContext, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItems from "./constructor-items/constructor-items";
import Modal from "../modals/modal/modal";
import OrderDetails from "../modals/order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openOrderModal,
  submitOrder,
} from "../../services/modals/order-details/actions";
import { useCalculateCost } from "../../hooks/useCalculateCost";
import { useDrop } from "react-dnd";
import {
  cleanIngredientsAction,
  dropIngredientsAction,
} from "../../services/burger-constructor/actions";
import update from "immutability-helper";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import Loader from "../modals/loader/loader";
import {
  constructorIngredientsSelector,
  costStateSelector,
  isLoadingSelector,
  orderNumberSelector,
  userSelector,
} from "../../services/selectors/selectors";
function BurgerConstructor() {
  const { orderDetailsModal, openOrderModal, closeOrderModal } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const constructorIngredients = useSelector(constructorIngredientsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const costState = useSelector(costStateSelector);
  const orderNumber = useSelector(orderNumberSelector);
  const user = useSelector(userSelector);

  function handleOrderDetails() {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(submitOrder(constructorIngredients)).then(() =>
        openOrderModal()
      );
    }
  }
  ///счетчик стоимости
  useCalculateCost(constructorIngredients);
  ///
  const [{ isOver }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(itemId) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  const handleDrop = (item) => {
    const itemWithKey = { ...item, key: uuidv4() };
    dispatch(dropIngredientsAction(itemWithKey));
  };

  return (
    <div ref={dropTarget} className={`mt-25 ${styles.componentContainer}`}>
      {constructorIngredients.bun !== null ||
      constructorIngredients.ingredients.length !== 0 ? (
        <>
          <ConstructorItems constructorIngredients={constructorIngredients} />
          <div className={`mt-10 ${styles.totalContainer}`}>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-medium">
                {isNaN(costState) ? 0 : costState}
              </p>
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
          {isLoading ? (
            <Loader></Loader>
          ) : (
            orderDetailsModal && (
              <Modal onClose={closeOrderModal}>
                <OrderDetails orderNumber={orderNumber} />
              </Modal>
            )
          )}
        </>
      ) : (
        <div
          className={`${styles.plugContainer} ${
            isOver ? styles.plugContainerHighlighted : ""
          } `}
        >
          Выберите ингредиенты для вашего бургера 😊
        </div>
      )}
    </div>
  );
}

export default BurgerConstructor;
