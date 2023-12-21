import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_MODAL_ORDER_DETAILS,
} from "../services/modals/order-details/actions";
import {
  CLOSE_MODAL_INGREDIENTS_DETAILS,
  OPEN_MODAL_INGREDIENTS_DETAILS,
} from "../services/modals/ingredients-details/action";
import { cleanIngredientsAction } from "../services/burger-constructor/actions";

export const useModal = () => {
  const dispatch = useDispatch();
  const orderDetailsModal = useSelector(
    (state) => state.orderDetailsModal.ordersModal
  );
  const openOrderModal = useCallback(() => {
    dispatch({ type: OPEN_MODAL_ORDER_DETAILS });
  }, []);

  const closeOrderModal = useCallback(() => {
    dispatch({ type: CLOSE_MODAL_ORDER_DETAILS });
    dispatch(cleanIngredientsAction());
  }, []);

  const ingredientsDetailsModal = useSelector(
    (state) => state.ingredientsDetailsModal.ingredientsModal
  );

  const openIngredientsModal = useCallback(() => {
    dispatch({ type: OPEN_MODAL_INGREDIENTS_DETAILS });
  }, []);

  const closeIngredientsModal = useCallback(() => {
    dispatch({ type: CLOSE_MODAL_INGREDIENTS_DETAILS });
  }, []);

  return {
    orderDetailsModal,
    openOrderModal,
    closeOrderModal,
    ingredientsDetailsModal,
    openIngredientsModal,
    closeIngredientsModal,
  };
};
