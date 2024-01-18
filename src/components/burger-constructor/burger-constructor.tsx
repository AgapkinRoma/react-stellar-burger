import React, { useState, useContext, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItems from "./constructor-items/constructor-items";
import Modal from "../modals/modal/modal";
import OrderDetails from "../modals/order-details/order-details";
import { useModal } from "../../hooks/useModal";
import {
  addCostActionCreater,
  resetCostActionCreater,
} from "../../services/cost/actions";
import {
  openOrderModal,
  submitOrder,
} from "../../services/modals/order-details/actions";
import { useDrop } from "react-dnd";
import {
  cleanIngredientsAction,
  dropIngredientsAction,
} from "../../services/burger-constructor/actions";
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
import { useTypedDispatch, useAppSelector } from "../../hooks/hooks";
import { IIngredientsState } from "../../services/burger-constructor/reducer";
function BurgerConstructor() {
  const { orderDetailsModal, openOrderModal, closeOrderModal } = useModal();
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const constructorIngredients = useAppSelector(
    constructorIngredientsSelector
  );
  console.log("конструкторИнгредиенты", constructorIngredients);
  const isLoading = useAppSelector(isLoadingSelector);
  const costState = useAppSelector(costStateSelector);
  const orderNumber = useAppSelector(orderNumberSelector);
  const user = useAppSelector(userSelector);
  interface IUseDropProps {
    isOver: boolean;
  }
  async function handleOrderDetails() {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(submitOrder(constructorIngredients));
      openOrderModal();
    }
  }

  ///счетчик стоимости
  useEffect(() => {
    dispatch(resetCostActionCreater());
    const { bun, ingredients } = constructorIngredients;
    if (bun) {
      const totalBunCost = bun.price * 2;
      dispatch(addCostActionCreater(totalBunCost));
    }
    if (ingredients) {
      const totalCost = (ingredients as IIngredientsState[]).reduce(
        (cost: number, item: IIngredientsState) => cost + item.price,
        0
      );
      dispatch(addCostActionCreater(totalCost));
    }
  }, [constructorIngredients, dispatch]);
  ///
  const [{ isOver }, dropTarget] = useDrop<
    IIngredientsState,
    unknown,
    IUseDropProps
  >({
    accept: "ingredients",
    drop(itemId: IIngredientsState) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  const handleDrop = (item: IIngredientsState) => {
    const itemWithKey = { ...item, key: uuidv4() };
    dispatch(dropIngredientsAction(itemWithKey));
  };

  return (
    <div ref={dropTarget} className={`mt-25 ${styles.componentContainer}`}>
      {constructorIngredients.bun !== null ||
      constructorIngredients.ingredients.length !== 0 ? (
        <>
          <ConstructorItems {...constructorIngredients} />
          <div className={`mt-10 ${styles.totalContainer}`}>
            <div className={styles.costContainer}>
              <p className="text text_type_digits-medium">
                {isNaN(costState) ? 0 : costState}
              </p>
              <CurrencyIcon type="primary" />
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
              <Modal title="" onClose={closeOrderModal}>
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
