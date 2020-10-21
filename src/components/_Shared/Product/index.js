import React from 'react';
import {View, Text} from 'react-native';

const Product = ({product}) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default Product;
