import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "../burger-constructor.module.css";
import { deleteIngredietnsAction } from "../../../services/burger-constructor/actions";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useTypedDispatch } from "../../../hooks/hooks";
import { Identifier } from "dnd-core";
import { IIngredientsState } from "../../../services/burger-constructor/reducer";
import { TMoveIngredientFn } from "../constructor-items/constructor-items";
interface IConstructorTopping {
  item: IIngredientsState;
  ingredients: IIngredientsState[];
  id: string;
  index: number;
  moveIngredient: TMoveIngredientFn;
}
export default function ConstructorTopping({
  item,
  ingredients,
  moveIngredient,
  id,
  index,
}: IConstructorTopping) {
  interface IDragObject {
    id: string;
    index: number;
  }
  interface IDraggingProps {
    isDragging: boolean;
  }

  interface IHandlerId {
    handlerId: Identifier | null;
  }
  const dispatch = useTypedDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<IDragObject, unknown, IHandlerId>({
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
      if (clientOffset) {
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveIngredient(dragIndex, hoverIndex, ingredients);

        item.index = hoverIndex;
      }
    },
  });
  const [{ isDragging }, drag] = useDrag<IDragObject, unknown, IDraggingProps>({
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
