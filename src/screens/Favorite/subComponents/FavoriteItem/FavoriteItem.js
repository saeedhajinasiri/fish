import React from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "../../../../elements";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import {Dimensions} from "react-native";
import {FavoriteItemStyle} from "./FavoriteItem.style";

const {width} = Dimensions.get('window');
const boxWidth = (width - 90) / 2;

const FavoriteItem = (props) => {
  return (
    <TouchableOpacity
      style={[FavoriteItemStyle.container, props.containerStyle]}
      onPress={() => alert("hi")}>
      <View style={FavoriteItemStyle.ImageBackgroundWrapper}>
        <ImageBackground
          style={FavoriteItemStyle.ImageBackground}
          borderRadius={10}
          width={boxWidth}
          height={170}
          resizeMode={"cover"}
          source={{uri: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/c2c824cb-e78b-4531-aafe-351405337c54.png"}}>
          <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 5, width: 30, height: 30}}>
            <View
              style={{
                backgroundColor: 'white',
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12
              }}
            >
              <AssetsComponent name={AssetFilesName.close} width={12} height={12}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity linkTo={"basket"} style={{alignSelf: 'flex-start', marginLeft: 5, width: 30, height: 30}}>
            <View
              style={{
                backgroundColor: 'white',
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12
              }}>
              <AssetsComponent name={AssetFilesName.basketBasketIcon} width={12} height={12}/>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={{fontSize: 14, color: '#2e3192', marginTop: 10}}>ماهی قزل آلا</Text>
        <Text style={{fontSize: 14, color: '#39b54a'}}>ت  250/000</Text>
      </View>
    </TouchableOpacity>

  )
};

export default FavoriteItem;
