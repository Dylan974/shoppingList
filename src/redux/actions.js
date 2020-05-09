import {GET_SHOPPING_LISTS} from './actionTypes';

export const getShoppingListsAction = data => ({
  type: GET_SHOPPING_LISTS,
  payload: {
    data,
  },
});
