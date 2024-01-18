import { IIngredientsState } from "../burger-constructor/reducer";
import { TBurgetIngredientsActions } from "./actions";
import * as ActionTypes from "./constants";

type TBurgerIngredientsInitialState = {
  ingredients: IIngredientsState[] | [];
  loading: boolean;
  error: string | null;
  selectedIngredient: IIngredientsState[] | [];
  tab: string;
};

const initialState: TBurgerIngredientsInitialState = {
  ingredients: [],
  loading: false,
  error: null,
  selectedIngredient: [],
  tab: "buns",
};

export function ingredientsReducer(
  state = initialState,
  action: TBurgetIngredientsActions
): TBurgerIngredientsInitialState {
  switch (action.type) {
    case ActionTypes.GET_INGREDIENTS_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case ActionTypes.GET_INGREDIENTS_SUCCESS: {
      return { ...state, loading: false, ingredients: action.payload };
    }
    case ActionTypes.GET_INGREDIENTS_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    case ActionTypes.GET_SELECTED_INGREDIENTS: {
      return { ...state, selectedIngredient: action.payload };
    }
    case ActionTypes.SWITCH_TAB: {
      return { ...state, tab: action.payload };
    }
    default:
      return state;
  }
}
