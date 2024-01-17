import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_MODAL_ORDER_DETAILS,
} from "../services/modals/order-details/constants";
import {
  CLOSE_MODAL_INGREDIENTS_DETAILS,
  OPEN_MODAL_INGREDIENTS_DETAILS,
} from "../services/modals/ingredients-details/constants";
import { cleanIngredientsAction } from "../services/burger-constructor/actions";
import { useTypedDispatch, TypedUseSelector } from "./hooks";

export const useModal = () => { 
  const dispatch = useTypedDispatch();
  const orderDetailsModal = TypedUseSelector(
    (state) => state.orderDetailsModal.ordersModal
  );
  const openOrderModal = useCallback(() => {
    dispatch({ type: OPEN_MODAL_ORDER_DETAILS });
  }, []);

  const closeOrderModal = useCallback(() => {
    dispatch({ type: CLOSE_MODAL_ORDER_DETAILS });
    dispatch(cleanIngredientsAction());
  }, []);

  const ingredientsDetailsModal = TypedUseSelector(
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
