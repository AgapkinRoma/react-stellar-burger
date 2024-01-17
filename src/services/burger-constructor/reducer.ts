import { IConstructorIngredients } from "../modals/order-details/actions";
import { TBurgerConstructorActions } from "./actions";
import * as ActionTypes from "./constants";

export interface IIngredientsState {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  key: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
}
export type TConstructorState = {
  bun: IIngredientsState | null;
  ingredients: IIngredientsState[] | [];
};
const initialState: TConstructorState = {
  bun: null,
  ingredients: [],
};

export function constructorIngredientsReducer(
  state = initialState,
  action: TBurgerConstructorActions
): TConstructorState {
  switch (action.type) {
    case ActionTypes.SET_BUN: {
      return {
        ...state,
        bun: action.payload,
      };
    }
    case ActionTypes.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case ActionTypes.DELETE_INGREDIENTS: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.key !== action.key
        ),
      };
    }
    case ActionTypes.DRAG_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }

    case ActionTypes.CLEAN_INGREDIENTS: {
      return {
        ...state,
        bun: null,
        ingredients: [],
      };
    }
    default:
      return state;
  }
}
