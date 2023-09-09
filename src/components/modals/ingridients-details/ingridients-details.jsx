import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import PropTypes from "prop-types";
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
  data: PropTypes.shape({
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
  }),
};
