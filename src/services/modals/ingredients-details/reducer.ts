import { TOrderDetailsActions } from "../order-details/actions";
import { TModalIngredientsDetailsActions } from "./action";
import * as ActionTypes from "./constants";

type TInitialStateIngredientsDetailsModal = {
  ingredientsModal: boolean;
};

const initialState: TInitialStateIngredientsDetailsModal = {
  ingredientsModal: false,
};
export function ingredientsDetailsModal(
  state = initialState,
  action: TModalIngredientsDetailsActions
): TInitialStateIngredientsDetailsModal {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL_INGREDIENTS_DETAILS: {
      return {
        ...state,
        ingredientsModal: true,
      };
    }
    case ActionTypes.CLOSE_MODAL_INGREDIENTS_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
