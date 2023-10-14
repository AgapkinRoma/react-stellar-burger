import {
  SET_BUN,
  SET_INGREDIENTS,
  DELETE_INGREDIENTS,
  DRAG_INGREDIENTS,
} from "./actions";
import { v4 as uuid } from "uuid";
const initialState = {
  bun: null,
  ingredients: [],
};

export function constructorIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        bun: action.payload,
      };
    }
    case SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case DELETE_INGREDIENTS: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.key !== action.key
        ),
      };
    }
    case DRAG_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    default:
      return state;
  }
}
