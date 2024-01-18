import * as ActionTypes from "./constants";

interface IOpenModalIngredientsDetails {
  type: typeof ActionTypes.OPEN_MODAL_INGREDIENTS_DETAILS;
}

interface ICloseModalIngredientsDetails {
  type: typeof ActionTypes.CLOSE_MODAL_INGREDIENTS_DETAILS;
}

export type TModalIngredientsDetailsActions =
  | IOpenModalIngredientsDetails
  | ICloseModalIngredientsDetails;
