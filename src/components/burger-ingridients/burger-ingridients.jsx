import styles from "./burger-ingridients.module.css";
import PropTypes from "prop-types";
import Tabs from "./tabs/tabs";
import IngridientsDetails from "../modals/ingridients-details/ingridients-details.jsx";
import React, { useState, useContext } from "react";
import Modal from "../modals/modal/modal";
import Ingridients from "./ingridients/ingridients";
import { ingredientPropType } from "../../utils/prop-types";
import { useModal } from "../../hooks/useModal";
import { IngredientsContext } from "../../services/ingridientsContext";
import { ConstructorContext } from "../../services/constructorContext";

function BurgerIngridients() {
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const {constructorIngredients, setConstructorIngredients } = useContext(ConstructorContext);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const mains = ingredients.filter((item) => item.type === "main");
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenModal = (item) => {
    setSelectedIngredient(item);
    openModal()
    item.type === 'bun' ? setConstructorIngredients({...constructorIngredients, bun: item}) : setConstructorIngredients({...constructorIngredients, ingredients: [...constructorIngredients.ingredients, item] })
 
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className={`${styles.componentContainer} mt-10`}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs></Tabs>

      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium mt-10">Булки</p>
        <div className={styles.ingridientContainer}>
          {buns.map((item) => (
            <Ingridients
              key={item._id}
              onClick={() => handleOpenModal(item)}
              item={item}
            />
          ))}
        </div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <div className={styles.ingridientContainer}>
          {sauces &&
            sauces.map((item) => (
              <Ingridients
                key={item._id}
                onClick={() => handleOpenModal(item)}
                item={item}
              />
            ))}
        </div>
        <p className="text text_type_main-medium mt-10">Начинка</p>
        <div className={styles.ingridientContainer}>
          {mains &&
            mains.map((item) => (
              <Ingridients
                key={item._id}
                onClick={() => handleOpenModal(item)}
                item={item}
              />
            ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal title={"Детали ингредиента"} onClose={handleCloseModal}>
          <IngridientsDetails ingredient={selectedIngredient}></IngridientsDetails>
        </Modal>
      )}
    </div>
  );
}

export default BurgerIngridients;
