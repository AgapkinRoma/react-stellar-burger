import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
export default function IngridientsDetails() {
  const { id } = useParams();
  const ingredient = useSelector((state) =>
    state.ingredientsReducer.ingredients.find((item) => item._id === id)
  );
  if (!ingredient) {
    return "Загрузка";
  }
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
IngridientsDetails.propTypes = {
  ingredient: PropTypes.shape({
    image_large: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
};
