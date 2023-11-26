import { useSelector } from "react-redux";
import image from "../../../images/done.svg";
import styles from "./order-details.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
export default function OrderDetails({ orderNumber }) {
  const isLoading = useSelector((state) => state.orderDetailsModal.loading);
  return (
    <div className={`${styles.container} mt-4`}>
      <p className={`${styles.digits} text text_type_digits-large`}>
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img
        className="pt-15 pb-15"
        src={image}
        alt="Иконка принятого заказа"
      ></img>
      <p className="text text_type_main-default">Ваш заказ готов</p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Приятного аппетита
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};
