import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
// import ProductListScreen from '../../_Shared/ProductListScreen';

const CreateShoppingListScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const productList = [];

  const _saveShoppingList = () => {
    console.log(name, category, productList);
  };

  return (
    <Container>
      <Header>
        <Text>TEST</Text>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input value={name} onChangeText={setName} defaultValue={''} />
          </Item>
          <Item floatingLabel last>
            <Label>Category</Label>
            <Input
              value={category}
              onChangeText={setCategory}
              defaultValue={''}
            />
          </Item>
        </Form>
        <Button onPress={_saveShoppingList} block success>
          <Text>Save</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default CreateShoppingListScreen;
