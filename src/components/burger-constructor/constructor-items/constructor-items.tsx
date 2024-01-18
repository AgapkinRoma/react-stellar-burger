import constructorStyles from "../burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import update from "immutability-helper";
import ConstructorTopping from "../constructor-topping/constructor-topping";
import { useTypedDispatch } from "../../../hooks/hooks";
import {
  IIngredientsState,
  TConstructorState,
} from "../../../services/burger-constructor/reducer";
import { dragIngredientsAction } from "../../../services/burger-constructor/actions";
export type TMoveIngredientFn = (
  dragIndex: number,
  hoverIndex: number,
  ingredients: IIngredientsState[]
) => void;
function ConstructorItems(constructorIngredients: TConstructorState) {
  const { ingredients, bun } = constructorIngredients;
  const topping = ingredients?.filter((item) => item.type !== "bun");

  const dispatch = useTypedDispatch();
  //перенос ингредиента(сортировка)
  const moveIngredient = useCallback<TMoveIngredientFn>(
    (dragIndex, hoverIndex, ingredients) => {
      const newProduct = update(ingredients, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, ingredients[dragIndex]],
        ],
      });

      dispatch(dragIngredientsAction(newProduct));
    },
    []
  );
  //

  return (
    <div className={constructorStyles.constructorContainer}>
      <div className={constructorStyles.container}>
        {bun && (
          <ConstructorElement
            type={"top"}
            isLocked
            text={`${bun.name} ${"(Верх)"}`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
      <div className={`${constructorStyles.scrollContainer} custom-scroll`}>
        {topping.map((item, index) => (
          <ConstructorTopping
            id={item._id}
            index={index}
            item={item}
            moveIngredient={moveIngredient}
            key={item.key}
            ingredients={ingredients}
          />
        ))}
      </div>
      <div className={constructorStyles.container}>
        {bun && (
          <ConstructorElement
            type={"bottom"}
            isLocked
            text={`${bun.name} ${"(Низ)"}`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
    </div>
  );
}

export default ConstructorItems;
