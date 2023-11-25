import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./order-info.module.css";
import ingrdientStyles from "../../../pages/orders-page/orders-page.module.css";
export default function OrderInfoIngredient({ ingredient, count }) {
  const { image_mobile, name, price } = ingredient;
  return (
    <div className={`${styles.componentContainer} custom-scroll`}>
      <div className={styles.imageContainer}>
        <div className={ingrdientStyles.ingredient}>
          <img
            className={styles.ingredientImage}
            src={image_mobile}
            alt={name}
          />
        </div>
        <p className={`${styles.text} text text_type_main-default`}>{name}</p>
      </div>
      <div className={styles.priceContainer}>
        <p
          className={`${styles.price} text text_type_digits-default`}
        >{`${price} x ${count}`}</p>
        <CurrencyIcon />
      </div>
    </div>
  );
}
