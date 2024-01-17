import IngridientsAbout from "./ingridients-about";
import styles from "./ingridietns-details.module.css";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import { TypedUseSelector } from "../../../hooks/hooks";
export default function IngridientsDetails() {
  const { id } = useParams();

  const ingredient = TypedUseSelector((state) =>
    state.ingredientsReducer.ingredients.find((item) => item._id === id)
  );

  if (!ingredient) {
    return (
      <div>
        <p>Загрузка</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
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
