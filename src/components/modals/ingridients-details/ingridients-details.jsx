import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { IngredientsContext } from "../../../services/ingridientsContext";
import { useContext } from "react";
export default function IngridientsDetails({ingredient}) {
  
  return (
    <div className={styles.container}>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <p className="text text_type_main-medium mt-4">{ingredient.name}</p>
      <div className={styles.aboutContainer}>
        <IngridientsAbout text="Калории,ккал" quantity={ingredient.calories} />
        <IngridientsAbout text="Белки, г" quantity={ingredient.proteins} />
        <IngridientsAbout text="Жиры, г" quantity={ingredient.fat} />
        <IngridientsAbout
          text="Углеводы, г"
          quantity={ingredient.carbohydrates}
        />
      </div>
    </div>
  );
}
