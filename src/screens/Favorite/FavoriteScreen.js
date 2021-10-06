import React from 'react';
import {Row} from '../../elements';
import {ScrollView} from "react-native";
import FavoriteItem from "./subComponents/FavoriteItem";

export const FavoriteScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <Row style={{flexWrap: "wrap", marginHorizontal: 30, marginVertical: 15, justifyContent: "space-between"}}>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
        <FavoriteItem/>
      </Row>
    </ScrollView>
  )
};
