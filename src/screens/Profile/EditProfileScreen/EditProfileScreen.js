import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Button, Divider, Row, Text, TextInput, TouchableOpacity, View} from "../../../elements";
import {EditProfileScreenStyle} from "./EditProfileScreen.style";
import {ScrollView} from 'react-native';
import {AssetFilesName} from '../../../assets/AssetFiles';
import AssetsComponent from '../../../assets';

export const EditProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={EditProfileScreenStyle.container}>
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

        <View style={EditProfileScreenStyle.wrapper}>
          <Row style={EditProfileScreenStyle.titleBox}>
            <Row style={EditProfileScreenStyle.full}>
              <Text style={EditProfileScreenStyle.account}>اطلاعات مشتری</Text>
            </Row>
            <TouchableOpacity linkTo={'edit-profile'} style={EditProfileScreenStyle.editButton}>
              <Text style={EditProfileScreenStyle.editText}>ویرایش</Text>
              <AssetsComponent
                style={{width: 10, height: 10}}
                name={AssetFilesName.close}
              />
            </TouchableOpacity>
          </Row>
          <Row style={EditProfileScreenStyle.full}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={"نام"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
              <TextInput
                placeholder={"ایمیل"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
              <TextInput
                placeholder={"شماره تماس"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
              <TextInput
                placeholder={"تاریخ تولد"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
            </View>
          </Row>
          <Row style={EditProfileScreenStyle.titleBox}>
            <Row style={EditProfileScreenStyle.full}>
              <Text style={EditProfileScreenStyle.sendingInfo}>اطلاعات ارسال</Text>
            </Row>
          </Row>
          <Row style={EditProfileScreenStyle.full}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={"موبایل"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
            </View>
          </Row>
          <Row style={EditProfileScreenStyle.titleBox}>
            <Row style={EditProfileScreenStyle.full}>
              <Text style={EditProfileScreenStyle.sendingInfo}>اطلاعات حساب بانکی</Text>
            </Row>
          </Row>
          <Row style={EditProfileScreenStyle.full}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={"شماره حساب"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
              <TextInput
                placeholder={"شماره شبا"}
                style={EditProfileScreenStyle.textInput}
                containerStyle={EditProfileScreenStyle.textInputContainer}/>
            </View>
          </Row>
          <Divider/>
          <Row style={EditProfileScreenStyle.full}>
            <View style={{flex: 1}}>
              <Row style={{marginVertical: 5}}>
                <Text style={{fontSize: 13}}>خبرنامه ارسال شود</Text>
              </Row>
              <Row style={{marginVertical: 5}}>
                <Text style={{fontSize: 13}}>پیشنهادات ویژه دریافت کنم</Text>
              </Row>
            </View>
          </Row>
        </View>

      </ScrollView>
      <View style={{padding: 10, backgroundColor: 'white'}}>
        <Divider/>
        <Button
          style={{
            marginHorizontal: 20,
            marginVertical: 6,
            height: 46,
            backgroundColor: '#19c978',
            borderRadius: 23,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          titleStyle={{
            color: '#ffffff',
            fontSize: 18
          }}
          title={"ثبت تغییرات"}/>
        <Divider/>
      </View>
    </View>
  )
};
