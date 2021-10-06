import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Row, Text, TouchableOpacity, View} from "../../../elements";
import {AccountScreenStyle} from "./AccountScreen.style";
import {ScrollView} from 'react-native';
import {AssetFilesName} from '../../../assets/AssetFiles';
import AssetsComponent from '../../../assets';

export const AccountScreen = () => {
  return (
    <ScrollView style={AccountScreenStyle.container}>
      <HeaderBanner
        isLoggedIn={true}
        containerStyle={{
          backgroundColor: '#e6e7e8'
        }}
        circleBannerStyle={{
          backgroundColor: '#e6e7e8'
        }}
        type={"banner"}
      />

      <View style={AccountScreenStyle.wrapper}>
        <Row style={AccountScreenStyle.titleBox}>
          <Row style={AccountScreenStyle.full}>
            <Text style={AccountScreenStyle.account}>اطلاعات مشتری</Text>
          </Row>
          <TouchableOpacity linkTo={'edit-profile'} style={AccountScreenStyle.editButton}>
            <Text style={AccountScreenStyle.editText}>ویرایش</Text>
            <AssetsComponent
              style={{width: 10, height: 10}}
              name={AssetFilesName.edit}
            />
          </TouchableOpacity>
        </Row>
        <Row style={AccountScreenStyle.full}>
          <View style={{flex: 1}}>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>نام</Text>
              <Text style={AccountScreenStyle.value}>ایران ایرانیان</Text>
            </Row>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>ایمیل</Text>
              <Text style={AccountScreenStyle.value}>email@test.com</Text>
            </Row>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>شماره تماس</Text>
              <Text style={AccountScreenStyle.value}>09121234567</Text>
            </Row>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>جنسیت</Text>
              <Text style={AccountScreenStyle.value}>مرد</Text>
            </Row>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>تاریخ تولد</Text>
              <Text style={AccountScreenStyle.value}></Text>
            </Row>
            <Row style={AccountScreenStyle.infoBox}>
              <Text style={AccountScreenStyle.label}>دریافت خبرنامه</Text>
              <Text style={AccountScreenStyle.value}>خیر</Text>
            </Row>
          </View>
        </Row>
      </View>

    </ScrollView>
  )
};
