import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "../burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredietnsAction } from "../../../services/burger-constructor/actions";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
export default function ConstructorTopping({
  item,
  ingredients,
  moveIngredient,
  id,
  index,
}) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const constingredients = ingredients.ingredients;
  const [{ handlerId }, drop] = useDrop({
    accept: "ingredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex, constingredients);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} className={`${opacity}`} data-handler-id={handlerId}>
      <div className={constructorStyles.iconContainer}>
        <DragIcon type="primary" />
        <ConstructorElement
          key={item.key}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => dispatch(deleteIngredietnsAction(item.key))}
        />
      </div>
    </div>
  );
}
ConstructorTopping.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
  ingredients: PropTypes.object.isRequired,
  moveIngredient: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
