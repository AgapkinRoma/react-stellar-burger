import { combineReducers } from "redux";
import { costReducer } from "./costReducer";
import { orderDetailsModal } from "../modals/order-details/reducer";
import { ingredientsReducer } from "../burger-ingredients/reducer";
import { ingredientsDetailsModal } from "../modals/ingredients-details/reducer";
import { constructorIngredientsReducer } from "../burger-constructor/reducer";
import { forgotPasswordReducer } from "../pages/forgot-password/reducer";
import { resetPasswordReducer } from "../pages/reset-password/reducer";
import { userLogicReducer } from "../pages/user/reducer";
export const rootReducer = combineReducers({
  orderDetailsModal,
  ingredientsDetailsModal,
  costReducer,
  ingredientsReducer,
  constructorIngredientsReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  userLogicReducer,
});
