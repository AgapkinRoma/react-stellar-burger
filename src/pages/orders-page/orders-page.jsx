import React, { useEffect } from "react";
import styles from "./orders-page.module.css";
import OrdersCards from "./orders-cards";
import OrdersStatusBoard from "./orders-status-board";

export default function OrdersPage() {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.mainContainer}>
        <OrdersCards header={"Лента заказов"}></OrdersCards>
        <OrdersStatusBoard></OrdersStatusBoard>
      </div>
    </div>
  );
}
