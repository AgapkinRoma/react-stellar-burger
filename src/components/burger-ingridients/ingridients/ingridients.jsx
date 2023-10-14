import React from "react";
import ingridientStyles from "../burger-ingridients.module.css";
import {
  CurrencyIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
export default function Ingridients(props) {
  const { item, onClick, count } = props;
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  return (
    !isDrag && (
      <div
        ref={dragRef}
        onClick={() => onClick(onClick)}
        className={ingridientStyles.ingridientBlock}
      >
        {count >= 1 && <Counter count={count} />}
        <img src={item.image} alt={item.name}></img>
        <div className={ingridientStyles.priceContainer}>
          <p className="text text_type_digits-default">{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{item.name}</p>
      </div>
    )
  );
}

Ingridients.propTypes = {
  item: ingredientPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
