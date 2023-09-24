import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItems from "./constructor-items/constructor-items";
import React from "react";
import Modal from "../modals/modal/modal";
import OrderDetails from "../modals/order-details/order-details";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import { useModal } from "../../hooks/useModal";
function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={`${styles.componentContainer} mt-25`}>
      <ConstructorItems />
      <div className={`${styles.totalContainer} mt-10`}>
        <div className={styles.costContainer}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon />
        </div>
        <Button
          onClick={openModal}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default BurgerConstructor;
