import constructorStyles from "../burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { dragIngredientsAction } from "../../../services/burger-constructor/actions";
import { useCallback } from "react";
import update from "immutability-helper";
import ConstructorTopping from "../constructor-topping/constructor-topping";
import PropTypes from "prop-types";
function ConstructorItems({ constructorIngredients }) {
  const topping = constructorIngredients.ingredients.filter(
    (item) => item.type !== "bun"
  );
  const bun = constructorIngredients.bun;
  const dispatch = useDispatch();
  //перенос ингредиента(сортировка)
  const moveIngredient = useCallback((dragIndex, hoverIndex, ingredients) => {
    const newProduct = update(ingredients, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, ingredients[dragIndex]],
      ],
    });
    dispatch(dragIngredientsAction(newProduct));
  }, []);
  //

  return (
    <div className={constructorStyles.constructorContainer}>
      <div className={constructorStyles.container}>
        {bun && (
          <ConstructorElement
            type={`${"top"} ${bun.type}`}
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
            ingredients={constructorIngredients}
          />
        ))}
      </div>
      <div className={constructorStyles.container}>
        {bun && (
          <ConstructorElement
            type={`${"bottom"} ${bun.type}`}
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

ConstructorItems.propTypes = {
  constructorIngredients: PropTypes.object.isRequired,
};
