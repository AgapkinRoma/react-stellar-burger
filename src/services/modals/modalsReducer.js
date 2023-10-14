import { combineReducers } from "redux";
import { orderDetailsModal } from "./order-details/reducer";
import { ingredientsDetailsModal } from "./ingredients-details/reducer";
export const modalsCombineReducer = combineReducers({
    ingredientsDetailsModal,
    orderDetailsModal
})