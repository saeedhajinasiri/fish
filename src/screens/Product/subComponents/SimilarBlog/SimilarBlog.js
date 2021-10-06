import React from "react";
import {Text, View} from "../../../../elements";
import Promotion from "../../../../components/Promotion/Promotion";
import {typography} from "../../../../themes";
import BlogOfferItem from "../../../Blog/subComponents/BlogOffers/BlogOfferItem";

const SimilarBlog = () => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={{color: '#2e3192', fontFamily: typography.bold, fontSize: 16, marginHorizontal: 20}}>دستورهای پخت این ماهی</Text>
      <Promotion style={{paddingLeft: 0, marginTop: 15}} containerStyle={{paddingLeft: 10}}>
        <BlogOfferItem width={150} height={190} linkTo={'blog-detail'} style={{flex: 1, transform: [{scale: -1}]}}/>
        <BlogOfferItem width={150} height={190} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={150} height={190} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={150} height={190} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={150} height={190} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
      </Promotion>
    </View>
  )
};

export default SimilarBlog;
