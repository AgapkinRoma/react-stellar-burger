import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
export const useCalculateCost = (constructorIngredients) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "reset" });

    const { bun, ingredients } = constructorIngredients;
    if (bun) {
      dispatch({ type: "add", payload: bun.price * 2 });
    }
    if (ingredients) {
      dispatch({
        type: "add",
        payload: ingredients.reduce((cost, item) => cost + item.price, 0),
      });
    }
  }, [constructorIngredients, dispatch]);
};
useCalculateCost.propTypes = {
  constructorIngredients: PropTypes.object.isRequired,
};
