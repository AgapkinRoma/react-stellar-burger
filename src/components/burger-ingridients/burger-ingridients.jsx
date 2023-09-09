import styles from "./burger-ingridients.module.css";
import PropTypes from "prop-types";
import Tabs from "./tabs/tabs";
import IngridientsDetails from "../modals/ingridients-details/ingridients-details.jsx";
import React, { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientStyles from "./burger-ingridients.module.css";
import Modal from "../modals/modal/modal";
function BurgerIngridients({ ingredients }) {
  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const mains = ingredients.filter((item) => item.type === "main");

  const [modalState, setModalState] = useState(false);
  const [ingridient, setIngridient] = useState(null);
  const openModal = (item) => {
    setIngridient(item);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className={`${styles.componentContainer} mt-10`}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs></Tabs>

      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium mt-10">Булки</p>
        <div className={styles.ingridientContainer}>
          {buns.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className={ingridientStyles.ingridientBlock}
            >
              <img src={item.image} alt={item.name}></img>
              <div className={ingridientStyles.priceContainer}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default">{item.name}</p>
            </div>
          ))}
        </div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <div className={styles.ingridientContainer}>
          {sauces &&
            sauces.map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className={ingridientStyles.ingridientBlock}
              >
                <img src={item.image} alt={item.name}></img>
                <div className={ingridientStyles.priceContainer}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default">{item.name}</p>
              </div>
            ))}
        </div>
        <p className="text text_type_main-medium mt-10">Начинка</p>
        <div className={styles.ingridientContainer}>
          {mains &&
            mains.map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className={ingridientStyles.ingridientBlock}
              >
                <img src={item.image} alt={item.name}></img>
                <div className={ingridientStyles.priceContainer}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default">{item.name}</p>
              </div>
            ))}
        </div>
      </div>
      {modalState && (
        <Modal title={"Детали ингредиента"} onClose={closeModal}>
          <IngridientsDetails data={ingridient}></IngridientsDetails>
        </Modal>
      )}
    </div>
  );
}
BurgerIngridients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ),
};

export default BurgerIngridients;
