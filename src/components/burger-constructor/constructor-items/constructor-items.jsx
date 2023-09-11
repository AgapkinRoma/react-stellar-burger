import constructorStyles from "../burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunDefault from "../../../images/bun-default.svg";
import PropTypes from "prop-types";
import  {ingredientPropType}  from "../../../utils/prop-types";
function ConstructorItems(props) {
  const { data } = props;
  const topping = data.filter((item) => item.type !== "bun");

  return (
    <div className={constructorStyles.constructorContainer}>
      <div className={constructorStyles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={bunDefault}
        />
      </div>
      <div className={`${constructorStyles.scrollContainer} custom-scroll`}>
        {topping.map((item) => (
          <div className={constructorStyles.iconContainer} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        ))}
      </div>

      <div className={constructorStyles.container}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bunDefault}
        />
      </div>
    </div>
  );
}

ConstructorItems.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType).isRequired,
};
export default ConstructorItems;
