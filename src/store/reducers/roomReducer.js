import { ADD_ROOM } from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};
