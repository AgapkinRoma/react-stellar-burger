import { data } from "../../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingridientStyles from "../burger-ingridients.module.css";
const Sauces = () => {
  const sauces = data.filter((item) => item.type === "sauce");
  
  return sauces.map((item) => (
    <div key={item.id} className={ingridientStyles.ingridientBlock}>
      <img src={item.image} alt={item.name}></img>
      <div className={ingridientStyles.priceContainer}>
        <p className="text text_type_digits-default">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
    </div>
  ));
};

export default Sauces;
