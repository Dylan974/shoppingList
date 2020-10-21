import React from 'react';
import {Text} from 'react-native';

const Product = ({product}) => {
  return <Text>{product.name}</Text>;
};

export default Product;
