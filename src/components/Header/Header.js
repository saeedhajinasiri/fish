import React from 'react';
import {Text, TouchableOpacity, Row} from "../../elements";
import AssetsComponent from "../../assets";
import {AssetFilesName} from "../../assets/AssetFiles";
import {HeaderStyle} from "./Header.style";
import Image from "../../elements/Image/Image";
import AssetsFilesName from "../../assets/AssetFiles";
import {useNavigation} from '@react-navigation/native';

const Header = ({containerStyle, circleBannerStyle, isLoggedIn}) => {
  const navigation = useNavigation();
  return (
    <Row style={{...HeaderStyle.container, ...containerStyle, ...(isLoggedIn ? {marginBottom: 20} : {})}}>
      <TouchableOpacity linkTo={"basket"}>
        <Image
          source={AssetsFilesName.basket}
          resizeMode={"cover"}
          width={25}
          height={25}
        />
        <Row style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff7bac',
          width: 15,
          height: 15,
          borderRadius: 15,
          position: 'absolute',
          bottom: 0,
          right: -5
        }}>
          <Text style={{color: 'white', lineHeight: 12, marginTop: 5}}>۲</Text>
        </Row>
      </TouchableOpacity>
      <AssetsComponent
        style={HeaderStyle.logoBackground}
        name={AssetFilesName.logoFish}
        width={55}
        height={43}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
        <AssetsComponent
          style={HeaderStyle.logoBackground}
          name={AssetFilesName.profileArrowLeft}
          width={8}
          height={15}
        />
      </TouchableOpacity>
    </Row>
  )
}

export default Header;
