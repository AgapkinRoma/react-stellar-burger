import React from "react";
import styles from "./orders-page.module.css";
import { useSelector } from "react-redux";
import { allOrdersSelector } from "../../services/selectors/selectors";
import { v4 as uuidv4 } from "uuid";
import { TypedUseSelector } from "../../hooks/hooks";
export default function OrdersStatusBoard() {
  const totalInfo = TypedUseSelector((state) => state.allOrderReducer.data);
  const orders = useSelector(allOrdersSelector);
  if (!orders) {
    return null;
  }
  if (!totalInfo) {
    return null;
  }
  const { total, totalToday } = totalInfo;

  return (
    <div className={styles.ordersInfoComponent}>
      <div className={styles.ordersBoard}>
        <div className={styles.readyContainer}>
          <h3 className="text text_type_main-medium">Готово:</h3>
          <div className={styles.ordersContainer}>
            {Array.isArray(orders) &&
              orders.slice(0, 20).map((order) => (
                <span
                  key={order._id}
                  className={`${styles.readyDigits} text text_type_digits-default`}
                >
                  {order.status === "done" ? order.number : ""}
                </span>
              ))}
          </div>
        </div>
        <div className={styles.ordersContainer}>
          <h3 className="text text_type_main-medium">В работе:</h3>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <span
                key={order._id}
                className={`${styles.readyDigits} text text_type_digits-default`}
              >
                {order.status !== "done" ? order.number : ""}
              </span>
            ))}
        </div>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <span className={`${styles.ordersDigits} text text_type_digits-large`}>
          {total}
        </span>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <span className={`${styles.ordersDigits} text text_type_digits-large`}>
          {totalToday}
        </span>
      </div>
    </div>
  );
}
