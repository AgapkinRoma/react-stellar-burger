const initialState = 0;
export function costReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return state + action.payload;

    case "remove":
      return state - action.payload;

    case "reset":
      return initialState;

    default:
      return state;
  }
}
