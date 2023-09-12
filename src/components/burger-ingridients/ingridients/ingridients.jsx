import React from "react";
import ingridientStyles from "../burger-ingridients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
export default function Ingridients(props) {
  const { item, onClick } = props;
  return (
    <div onClick={() => onClick(item)}   className={ingridientStyles.ingridientBlock}>
      <img src={item.image} alt={item.name}></img>
      <div className={ingridientStyles.priceContainer}>
        <p className="text text_type_digits-default">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
    </div>
  );
}


Ingridients.propTypes = {
    item: ingredientPropType.isRequired,
    onClick: PropTypes.func.isRequired,
  }