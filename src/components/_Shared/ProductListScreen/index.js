import React from 'react';
import {Container, Header, Content, List} from 'native-base';
import Product from '../Product';
const ProductListScreen = ({productList}) => {
  console.log(productList);

  const _displayProduct = ({product}) => {
    return <Product product={product} />;
  };

  return (
    <Container>
      <Header />
      <Content>
        <List dataArray={productList} renderRow={_displayProduct} />
      </Content>
    </Container>
  );
};

export default ProductListScreen;
