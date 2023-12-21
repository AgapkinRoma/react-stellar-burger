import React, { useState } from "react";
import styles from "./orders-page.module.css";
import OrderCard from "./order-card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "../../services/all-orders/actions";
import { useMatch } from "react-router";
import { disconnect } from "../../services/user-orders/actions";
import { getOrderNumber } from "../../services/modals/order-details/actions";
import { allOrdersSelector } from "../../services/selectors/selectors";
export default function OrdersCards({ header }) {
  const dispatch = useDispatch()
  const ALL_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
  const orders = useSelector(allOrdersSelector);
  const isProfile = useMatch("/profile/orders/");
  const ingredients = useSelector(
    (state) => state.ingredientsReducer.ingredients
  );
  const findIngredientById = (id) => {
    return ingredients?.find((ingredient) => ingredient._id === id);
  };

 

  useEffect(() => {
    if (isProfile) {
      const accessToken = localStorage.getItem("accessToken");
      const accessTokenSplit = accessToken.split("Bearer ")[1];
      const USER_ORDERS_URL = `wss://norma.nomoreparties.space/orders?token=${accessTokenSplit}`;
      dispatch(connect(USER_ORDERS_URL));
      return () => {
        dispatch(disconnect(USER_ORDERS_URL));
      };
    } else {
      dispatch(connect(ALL_ORDERS_URL));
      return () => {
        dispatch(disconnect(ALL_ORDERS_URL));
      };
    }
  }, [isProfile, dispatch]);

  return (
    <div>
      <h2 className="text text_type_main-large mt-6 mb-6 ">{header}</h2>
      <div className={`${styles.scrollContainer} custom-scroll`}>
        {Array.isArray(orders) &&
          orders.length > 0 &&
          orders.map((orderInfo) => {
            const fullIngredientsInfo =
              orderInfo.ingredients.map(findIngredientById);
            return (
              <OrderCard
                key={orderInfo._id}
                orderInfo={{ ...orderInfo, ingredients: fullIngredientsInfo }}
              />
            );
          })}
      </div>
    </div>
  );
}
