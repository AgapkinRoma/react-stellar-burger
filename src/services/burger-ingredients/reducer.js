import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_SELECTED_INGREDIENTS,
  SWITCH_TAB
} from "./actions";

const initialState = {
  ingredients: [],
  loading: false,
  error: null,
  selectedIngredient: null,
  tab: 'buns'
};

export function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, loading: false, ingredients: action.payload };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    case GET_SELECTED_INGREDIENTS: {
      return { ...state, selectedIngredient: action.payload };
    }
    case SWITCH_TAB:{
      return {...state, tab:action.payload}
    }
    default:
      return state;
  }
}
