import React, {useEffect} from 'react';
import {Container, Header, Content, List, ListItem, Text} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {getShoppingLists} from '../../redux/selectors';
import {fetchShoppingLists} from '../../api/shoppingList';

const ShoppingLists = ({navigation}) => {
  const dispatch = useDispatch();
  const shoppingLists = useSelector(getShoppingLists);
  console.log(shoppingLists);
  useEffect(() => {
    fetchShoppingLists(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default ShoppingLists;
