import { useParams } from "react-router";
import { connect, useSelector } from "react-redux";
import OrderInfoIngredient from "./order-info-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";

import { allIngredientsSelector } from "../../../services/selectors/selectors";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getOrderNumber } from "../../../services/modals/order-details/actions";

export default function OrderInfo() {
  const dispatch = useDispatch();
  const { number } = useParams();
  const ingredinets = useSelector(allIngredientsSelector);
  const order = useSelector((store) => {
    let order = store.allOrderReducer.data?.orders?.find(
      (order) => order.number == number
    );
    if (order) {
      return order;
    }
    order = store.userOrderReducer.data?.orders?.find(
      (order) => order.number == number
    );

    if (order) {
      return order;
    } else {
      return store.orderDetailsModal.selectedOrder;
    }
  });

  useEffect(() => {
    if (!order) {
      console.log("test");
      dispatch(getOrderNumber(number));
    }
  }, []);

  if (!order) {
    return <h2>Загрузка...</h2>;
  }

  const ingredientOrders = order.ingredients.map((ingredientId) => {
    return ingredinets?.find((ingredient) => ingredientId === ingredient._id);
  });

  const price = ingredientOrders.reduce(
    (sum, ingredient) => sum + (ingredient?.price || 0),
    0
  );

  const countIngredients = (ingredient) => {
    return ingredientOrders?.filter((item) => item._id === ingredient._id)
      .length;
  };

  const setIngredients = Array.from(new Set(ingredientOrders));
  const statusColor =
    order.status === "done"
      ? `${styles.doneColor} text text_type_main-default mt-2 `
      : "text text_type_main-default mt-2";
  return (
    <div className={styles.componentContainer}>
      <p className="text text_type_digits-default ">{`#${number}`}</p>
      <p className="text text_type_main-medium mt-5 ">{order.name}</p>
      <p className={statusColor}>
        {order.status === "done" ? "Выполнен" : "Не выполнен"}
      </p>

      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium ">Состав:</p>
        {setIngredients.map((ingredient) => (
          <OrderInfoIngredient
            key={ingredient._id}
            count={countIngredients(ingredient)}
            ingredient={ingredient}
          ></OrderInfoIngredient>
        ))}
      </div>
      <div className={`${styles.totalPrice} mt-5`}>
        <FormattedDate
          className="text text_type_main-small text_color_inactive"
          date={new Date(order.createdAt)}
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
