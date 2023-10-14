import { combineReducers } from "redux";
import { modalsCombineReducer } from "../modals/modalsReducer";
import { costReducer } from "./costReducer";
import { orderDetailsModal } from "../modals/order-details/reducer";
import { ingredientsReducer } from "../burger-ingredients/reducer";
import { ingredientsDetailsModal } from "../modals/ingredients-details/reducer";
import { constructorIngredientsReducer } from "../burger-constructor/reducer";
export const rootReducer = combineReducers({
  orderDetailsModal,
  ingredientsDetailsModal,
  costReducer,
  ingredientsReducer,
  constructorIngredientsReducer,
});
