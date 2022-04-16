import { initialState } from "./state";

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_FEEDS":
      return {
        ...state,
        feeds: [...state.feeds, payload],
      };
    case "CLEAR_FEEDS":
      return {
        ...state,
        feeds: [],
      };

    default:
      return state;
  }
}
