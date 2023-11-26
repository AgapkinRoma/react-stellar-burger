import { useParams } from "react-router";
import { useSelector } from "react-redux";
import OrderInfoIngredient from "./order-info-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";

import {
  allIngredientsSelector,
  allOrdersSelector,
  orderNumberSelector,
  selectedOrderSelector,
  userOrdersSelector,
} from "../../../services/selectors/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderNumber } from "../../../services/modals/order-details/actions";

export default function OrderInfo() {
  const dispatch = useDispatch();
  const { number } = useParams();
  const ingredinets = useSelector(allIngredientsSelector);
  const allOrders = useSelector(allOrdersSelector);
  const userOrders = useSelector(userOrdersSelector);
  const orderNumber = useSelector(selectedOrderSelector);
  const orders = useSelector((store) => {
    const order = allOrders.find((order) => order.number == number);
    if (order) {
      return order;
    }
    order = userOrders.find((order) => order.number == number);

    if (order) {
      return order;
    } else {
      return orderNumber.find((order) => order.number == number);
    }
  });
  useEffect(() => {
    if (!orders) {
      dispatch(getOrderNumber(number));
    }
  });

  const ingredientOrders = orders.ingredients.map((ingredientId) => {
    return ingredinets.find((ingredient) => ingredientId === ingredient._id);
  });

  const price = ingredientOrders.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  );
  const countIngredients = (ingredient) => {
    return ingredientOrders.filter((item) => item._id === ingredient._id)
      .length;
  };

  const setIngredients = Array.from(new Set(ingredientOrders));

  return (
    <div>
      <p className="text text_type_digits-default ">{`#${number}`}</p>
      <p className="text text_type_main-medium mt-5 ">{orders.name}</p>
      <p className="text text_type_main-default mt-2 ">
        {orders.status === "done" ? "Выполнен" : "Не выполнен"}
      </p>

      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium ">Состав:</p>
        {setIngredients.map((ingredient) => (
          <OrderInfoIngredient
            count={countIngredients(ingredient)}
            ingredient={ingredient}
          ></OrderInfoIngredient>
        ))}
      </div>
      <div className={`${styles.totalPrice} mt-5`}>
        <FormattedDate
          className="text text_type_main-small text_color_inactive"
          date={new Date(orders.createdAt)}
        />
        <div
          className={`${styles.costContainer} text text_type_digits-default`}
        >
          <span>{price}</span>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  );
}
