import React from 'react';
import {ScrollView} from 'react-native';
import SliderItem from "../../components/Slider/SliderItem";
import Promotion from "../../components/Promotion/Promotion";
import Offers from "./subComponents/offers";
import PromotionButton from "./subComponents/PromotionButton";
import HeaderBanner from "../../components/Header/HeaderBanner";
import ProductOffers from "./subComponents/ProductOffers";
import BlogOffers from "../Blog/subComponents/BlogOffers";
import HomeInformation from "./subComponents/HomeInformation";

export const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <HeaderBanner
        type={"banner"}
      />
      <PromotionButton/>
      <Promotion>
        <SliderItem/>
        <SliderItem/>
        <SliderItem/>
        <SliderItem/>
      </Promotion>
      <Offers/>
      <ProductOffers/>
      <BlogOffers/>
      <HomeInformation/>
    </ScrollView>
  )
};
