import React from 'react';
import {Row, Text, TextInput} from '../../elements';
import {ScrollView} from "react-native";
import ProductCategory from "../../components/ProductCategory";

export const SearchScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <TextInput
        containerStyle={{
          backgroundColor: "#e6e6e6",
          borderColor: "#e6e6e6",
          paddingVertical: 5
        }}
        iconName={"search"}
        placeholder="جستجو"
      />
      <Row style={{marginTop: 15, marginHorizontal: 16, flex: 1, alignItems: "center"}}>
        <Text style={{
          fontFamily: "Kara",
          fontSize: 16,
          lineHeight: 22,
          color: "#2e3192",
          //textAlign:"right"
        }}>
          دسته بندی ها
        </Text>
      </Row>
      <Row style={{flexWrap: "wrap", marginHorizontal: 30, marginVertical: 15, justifyContent: "space-between"}}>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
      </Row>
    </ScrollView>
  )
};
