import React from "react";
import TitleBox from "../../../Home/subComponents/TitleBox";
import {TouchableOpacity, Text, View} from '../../../../elements';
import Promotion from "../../../../components/Promotion/Promotion";
import BlogOfferItem from "./BlogOfferItem";

const BlogOffers = () => {
  return (
    <View style={{marginTop: 15}}>
      <TitleBox
        title={'جدیدترینهای وبلاگ'}
        rightComponent={(
          <TouchableOpacity linkTo={"blog"}>
            <Text style={{color: '#eb78ab'}}>مشاهده همه</Text>
          </TouchableOpacity>
        )}
      />
      <Promotion style={{paddingLeft: 7}}>
        <BlogOfferItem width={180} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={180} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={180} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={180} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
        <BlogOfferItem width={180} linkTo={'blog-detail'} style={{transform: [{scale: -1}]}}/>
      </Promotion>
    </View>
  )
};

export default BlogOffers;
