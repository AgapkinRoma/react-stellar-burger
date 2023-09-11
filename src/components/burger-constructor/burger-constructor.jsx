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
function BurgerConstructor({ ingredients }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const handleOpenModal = () => {
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <div className={`${styles.componentContainer} mt-25`}>
      <ConstructorItems data={ingredients} />
      <div className={`${styles.totalContainer} mt-10`}>
        <div className={styles.costContainer}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon />
        </div>
        <Button
          onClick={handleOpenModal}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default BurgerConstructor;
