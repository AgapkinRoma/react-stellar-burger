import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
export default function IngridientsDetails({ data }) {
  return (
    <div className={styles.container}>
      <img src={data.image_large} alt={data.name}></img>
      <p className="text text_type_main-medium mt-4">{data.name}</p>
      <div className={styles.aboutContainer}>
        <IngridientsAbout text="Калории,ккал" quantity={data.calories} />
        <IngridientsAbout text="Белки, г" quantity={data.proteins} />
        <IngridientsAbout text="Жиры, г" quantity={data.fat} />
        <IngridientsAbout text="Углеводы, г" quantity={data.carbohydrates} />
      </div>
    </div>
  );
}
IngridientsDetails.propTypes = {
  data: ingredientPropType.isRequired

};
