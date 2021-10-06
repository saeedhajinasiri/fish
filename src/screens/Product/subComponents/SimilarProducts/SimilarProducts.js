import React from "react";
import {Text, View} from "../../../../elements";
import Promotion from "../../../../components/Promotion/Promotion";
import DiscountProduct from "../../../../components/DiscountProduct";
import {typography} from "../../../../themes";

const SimilarProducts = () => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={{color: '#2e3192', fontFamily: typography.bold, fontSize: 16, marginHorizontal: 20}}>محصولات مشابه</Text>
      <Promotion style={{paddingLeft: 0, marginTop: 15}} containerStyle={{paddingLeft: 10}}>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
        <DiscountProduct type={'vertical'} containerStyle={{backgroundColor: 'transparent', marginHorizontal: 7, transform: [{scale: -1}]}}/>
      </Promotion>
    </View>
  )
};

export default SimilarProducts;
