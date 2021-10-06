import React from "react";
import {View, Text} from "../../../../elements";
import {BasketScreenStyle} from "../BasketScreen.style";
import TouchableOpacity from "../../../../elements/TouchableOpacity";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";

export const FirstStep = ({setBasketCount}) => {
  return (
    <View style={BasketScreenStyle.container}>
      <View style={BasketScreenStyle.full}>
        <TouchableOpacity onPress={() => setBasketCount(1)} style={BasketScreenStyle.emptyWrapper}>
          <View style={BasketScreenStyle.emptyTitleBox}>
            <AssetsComponent
              style={{marginTop: 50}}
              name={AssetFilesName.emptyBasket}
              width={135}
              height={135}
            />
          </View>
          <View style={BasketScreenStyle.emptyTitleBox}>
            <Text style={BasketScreenStyle.emptyTitle}>سبد خرید شما خالی ست!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
