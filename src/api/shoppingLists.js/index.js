import firestore from '@react-native-firebase/firestore';
import {getShoppingListsAction} from '../../redux/actions';

export const fetchShoppingList = async dispatch => {
  console.log('fetch shopping list');
  try {
    const response = await firestore()
      .collection('ShoppingLists')
      .get();
    console.log('shopping lists : ', response);
    dispatch(getShoppingListsAction(response));
  } catch (e) {
    console.error('an error occured when trying to request ShoppingList', e);
  }
};
