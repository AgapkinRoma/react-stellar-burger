import styles from "./orders-page.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import { useSelector } from "react-redux";
export default function OrderCard({ orderInfo }) {
  const { number, ingredients, name, status, createdAt } = orderInfo;
  const location = useLocation();
  const sliceIngredients = ingredients.slice(6).length;

  const price = ingredients.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  );
  console.log("ингредиенты", ingredients);

  const url =
    location.pathname === `/feed`
      ? `/feed/${number}`
      : `/profile/orders/${number}`;

  return (
    <Link
      to={url}
      key={number}
      className={styles.link}
      state={{ background: location }}
    >
      <div className={styles.orderBlock}>
        <div className={styles.idBlock}>
          <p className="text text_type_digits-medium">{`#${number}`}</p>
          <FormattedDate
            className="text text_type_main-small text_color_inactive"
            date={new Date(createdAt)}
          />
        </div>
        <p className="text text_type_main-medium">{name}</p>
        <p className="text text_type_main-medium">
          {status === "done" ? "Готово" : "Не готово"}
        </p>
        <div className={styles.ingredientsAndPriceBlock}>
          <div className={styles.ingredientContainer}>
            {ingredients.map((ingredient, index) => {
              if (index < 6) {
                return (
                  <div key={uuidv4()} className={styles.ingredient}>
                    <img
                      className={styles.ingredientImg}
                      src={ingredient.image_mobile}
                    />

                    {index === 5 && sliceIngredients !== 0 && (
                      <div className={styles.countIngredient}>
                        <span className="text text_type_digits-default">{`+${sliceIngredients}`}</span>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.priceBlock}>
            <span className="text text_type_main-medium">{price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}
