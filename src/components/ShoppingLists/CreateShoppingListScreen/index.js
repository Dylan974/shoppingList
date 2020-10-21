import React, {useState, Text} from 'react';
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
import ProductListScreen from '../../_Shared/ProductListScreen';

const CreateShoppingListScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const productList = [];

  const _saveShoppingList = () => {
    console.log(name, category, productList);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              value={name}
              onChangeText={setName}
              textContentType={String}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Category</Label>
            <Input
              value={category}
              onChangeText={setCategory}
              textContentType={String}
            />
          </Item>
        </Form>
        <ProductListScreen productList={productList} />
        <Button onPress={_saveShoppingList} block success>
          <Text>Save</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default CreateShoppingListScreen;
