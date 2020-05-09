import firestore from '@react-native-firebase/firestore';
import {getShoppingListsAction} from '../../redux/actions';

export const fetchShoppingLists = async dispatch => {
  try {
    const shoppingLists = [];
    await firestore()
      .collection('ShoppingLists')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          shoppingLists.push(doc.data());
          dispatch(getShoppingListsAction(shoppingLists));
        });
      });
  } catch (e) {
    console.error('an error occured when trying to request ShoppingList', e);
  }
};
