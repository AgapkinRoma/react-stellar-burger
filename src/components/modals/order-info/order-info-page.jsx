import React from "react";
import OrderInfo from "./order-info";
import styles from './order-info.module.css'
export default function OrderInfoPage() {
  return (
    <div className={styles.infoPageContainer}>
      <OrderInfo></OrderInfo>
    </div>
  );
}
