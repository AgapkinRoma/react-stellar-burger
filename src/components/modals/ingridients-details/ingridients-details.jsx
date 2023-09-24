import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { IngredientsContext } from "../../../services/ingridientsContext";
import { useContext } from "react";
export default function IngridientsDetails() {
  const {ingredients} = useContext(IngredientsContext)
  return (
    <div className={styles.container}>
      <img src={ingredients.image_large} alt={ingredients.name}></img>
      <p className="text text_type_main-medium mt-4">{ingredients.name}</p>
      <div className={styles.aboutContainer}>
        <IngridientsAbout text="Калории,ккал" quantity={ingredients.calories} />
        <IngridientsAbout text="Белки, г" quantity={ingredients.proteins} />
        <IngridientsAbout text="Жиры, г" quantity={ingredients.fat} />
        <IngridientsAbout
          text="Углеводы, г"
          quantity={ingredients.carbohydrates}
        />
      </div>
    </div>
  );
}
