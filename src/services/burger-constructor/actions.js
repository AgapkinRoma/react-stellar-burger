export const SET_BUN = "SET_BUN";
export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const DELETE_INGREDIENTS = "DELETE_INGREDIENTS";
export const DRAG_INGREDIENTS = "DRAG_INGREDIENTS";
export function dropIngredientsAction(item) {
  return item.type === "bun"
    ? { type: SET_BUN, payload: item }
    : { type: SET_INGREDIENTS, payload: item };
}

export const deleteIngredietnsAction = (key) => ({
  type: DELETE_INGREDIENTS,
  key: key,
});

export const dragIngredientsAction = (item) => ({
  type: DRAG_INGREDIENTS,
  payload: item,
});
