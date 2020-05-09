const defaultState = [];
import {GET_SHOPPING_LISTS} from '../actionTypes';

export const shoppingLists = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SHOPPING_LISTS:
      return action.payload.data;
    default:
      return state;
  }
};
