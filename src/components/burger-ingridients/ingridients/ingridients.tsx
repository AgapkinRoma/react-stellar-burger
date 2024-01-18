import React from "react";
import ingridientStyles from "../burger-ingridients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { IIngredientsState } from "../../../services/burger-constructor/reducer";
interface IIngredientsProps {
  item: IIngredientsState;
  count: number;
}
export default function Ingridients({ item, count }: IIngredientsProps) {
  interface IIsDragProps{
    isDrag:boolean
  }
 
  const [{ isDrag }, dragRef] = useDrag<IIngredientsState,unknown,IIsDragProps>({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation();

  const id = item["_id"];

  return isDrag ? null : (
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
  );
}
