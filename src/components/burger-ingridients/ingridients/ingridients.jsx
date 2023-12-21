import React from "react";
import ingridientStyles from "../burger-ingridients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useParams } from "react-router-dom";
export default function Ingridients(props) {
  const { item, count } = props;
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation();

  const id = item["_id"];

  return (
    !isDrag && (
      <Link
        className={`${ingridientStyles.link} text text_type_digits-default`}
        key={id}
        to={`/ingredients/${id}`}
        state={{ background: location }}
      >
        <div ref={dragRef} className={ingridientStyles.ingridientBlock}>
          {count >= 1 && <Counter count={count} />}
          <img src={item.image} alt={item.name}></img>
          <div className={ingridientStyles.priceContainer}>
            <p className="text text_type_digits-default">{item.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className="text text_type_main-default">{item.name}</p>
        </div>
      </Link>
    )
  );
}

Ingridients.propTypes = {
  item: ingredientPropType.isRequired,
  count: PropTypes.number.isRequired,
};
