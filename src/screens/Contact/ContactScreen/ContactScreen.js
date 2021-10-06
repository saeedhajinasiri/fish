import React from 'react';
import {Dimensions} from 'react-native';
import {Divider, Image, Row, Text, View} from "../../../elements";
import {ContactScreenStyle} from "./ContactScreen.style";
import AssetsComponent from '../../../assets';
import {AssetFilesName} from '../../../assets/AssetFiles';

const {width} = Dimensions.get('screen');

export const ContactScreen = () => {
  return (
    <View style={ContactScreenStyle.container}>
      <View style={ContactScreenStyle.wrapper}>
        <View style={ContactScreenStyle.contactInfo}>

          <Row style={ContactScreenStyle.contactRow}>
            <Text style={ContactScreenStyle.supportTitle}>میزبان صدای گرمتان هستیم</Text>
          </Row>
          <Divider style={{marginHorizontal: 10}}/>
          <Row style={ContactScreenStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.telephone} resizeMode={"contain"} width={30} height={26}/>
            <Text style={ContactScreenStyle.contactTitle}>6666666-021</Text>
          </Row>
          <Divider style={{marginHorizontal: 10}}/>
          <Row style={ContactScreenStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.mobile} resizeMode={"contain"} width={27} height={29}/>
            <Text style={ContactScreenStyle.contactTitle}>6666666-021</Text>
          </Row>
          <Divider style={{marginHorizontal: 10}}/>
          <Row style={ContactScreenStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.email} resizeMode={"contain"} width={24} height={19}/>
            <Text
              style={ContactScreenStyle.contactTitle}>info@fishdelivery</Text>
          </Row>
          <Divider style={{marginHorizontal: 10}}/>
          <Row style={ContactScreenStyle.contactRow}>
            <AssetsComponent name={AssetFilesName.pin} resizeMode={"contain"} width={20} height={32}/>
            <Text
              style={ContactScreenStyle.contactTitle}>ایران/ تهران، عضدی، بعد از هجدهم، پلاک 213
              کدپستی: 236658456</Text>
          </Row>

          <Row style={{marginTop: 30, marginHorizontal: 30, alignItems: 'center'}}>
            <Image
              height={125}
              width={width - 40}
              source={{uri: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/731a94df-e870-4bbc-a1cd-bcc7b321132e.png"}}/>
          </Row>
        </View>
      </View>

    </View>
  )
};
