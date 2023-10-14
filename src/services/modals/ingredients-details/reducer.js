import {
  CLOSE_MODAL_INGREDIENTS_DETAILS,
  OPEN_MODAL_INGREDIENTS_DETAILS,
} from "./action";

const initialState = {
  ingredientsModal: false,
};
export function ingredientsDetailsModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_INGREDIENTS_DETAILS: {
      return {
        ...state,
        ingredientsModal: true,
      };
    }
    case CLOSE_MODAL_INGREDIENTS_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
