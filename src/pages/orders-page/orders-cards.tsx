import React, { useState } from "react";
import styles from "./orders-page.module.css";
import OrderCard from "./order-card";
import { useEffect } from "react";
import { connect } from "../../services/all-orders/actions";
import { useMatch } from "react-router";
import { disconnect } from "../../services/user-orders/actions";
import { allOrdersSelector } from "../../services/selectors/selectors";
import { useTypedDispatch, useAppSelector } from "../../hooks/hooks";
interface IOrderCardProps {
  header: string;
}
export default function OrdersCards({ header }: IOrderCardProps) {
  const dispatch = useTypedDispatch();
  const ALL_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
  const orders = useAppSelector(allOrdersSelector);
  const data = useAppSelector((state) => state.allOrderReducer.data);
  const error = useAppSelector((state) => state.allOrderReducer.error);
  console.log("data", data);
  console.log("ошибка ", error);

  const isProfile = useMatch("/profile/orders/");
  const ingredients = useAppSelector(
    (state) => state.ingredientsReducer.ingredients
  );
  const findIngredientById = (id: string) => {
    return ingredients?.find((ingredient) => ingredient._id === id);
  };

  useEffect(() => {
    if (isProfile) {
      const accessToken = localStorage.getItem("accessToken");
      const accessTokenSplit = accessToken?.split("Bearer ")[1];
      const USER_ORDERS_URL = `wss://norma.nomoreparties.space/orders?token=${accessTokenSplit}`;
      dispatch(connect(USER_ORDERS_URL));
      return () => {
        dispatch(disconnect());
      };
    } else {
      dispatch(connect(ALL_ORDERS_URL));
      return () => {
        dispatch(disconnect());
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
