import constructorStyles from "../burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorContext } from "../../../services/constructorContext";
import { useContext } from "react";
import {v4 as uuid} from 'uuid'
function ConstructorItems() {
 const  {constructorIngredients} = useContext(ConstructorContext)
  const topping = constructorIngredients.ingredients.filter((item) => item.type !== "bun");
  const bun = constructorIngredients.bun;
  return (
    <div className={constructorStyles.constructorContainer}>
      <div className={constructorStyles.container}>
      {bun  &&
        <ConstructorElement
          type={`${'top'} ${bun.type}`}
          isLocked
          text={`${bun.name} ${'(Верх)'}`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        
        />}
      </div>
      <div className={`${constructorStyles.scrollContainer} custom-scroll`}>
        {topping.map((item) => (
          <div className={constructorStyles.iconContainer} key={uuid()}>
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
      {bun  &&
        <ConstructorElement
          type={ `${'bottom'} ${bun.type}`}
          isLocked
          text={`${bun.name} ${'(Низ)'}`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        
        />}
      </div>
    </div>
  );
}


export default ConstructorItems;
