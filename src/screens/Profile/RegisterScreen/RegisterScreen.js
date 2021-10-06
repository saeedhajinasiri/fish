import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {RegisterScreenStyle} from "./RegisterScreen.style";
import {ScrollView} from 'react-native';

export const RegisterScreen = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      style={RegisterScreenStyle.container}>
      <View style={RegisterScreenStyle.fullHeight}>
        <HeaderBanner
          type={"banner"}
        />

        <View style={RegisterScreenStyle.wrapper}>
          <View style={RegisterScreenStyle.loginBox}>
            <Text style={RegisterScreenStyle.description}>کد تایید 5 رقمی ارسال شده به شماره همراه
              0912021 را وارد نمایید :</Text>
            <View style={{
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Row>
                <TextInput
                  containerStyle={RegisterScreenStyle.textInputContainer}
                  placeholder={"کد تایید"}
                  style={RegisterScreenStyle.mobileInput}/>
              </Row>
              <Row>
                <TextInput
                  containerStyle={RegisterScreenStyle.textInputContainer}
                  placeholder={"نام و نام خانوادگی"}
                  style={RegisterScreenStyle.mobileInput}/>
              </Row>
              <Row>
                <TextInput
                  containerStyle={RegisterScreenStyle.textInputContainer}
                  placeholder={"آدرس ایمیل"}
                  style={RegisterScreenStyle.mobileInput}/>
              </Row>
            </View>
            <Row>
              <Button
                buttonStyle={RegisterScreenStyle.button}
                titleStyle={RegisterScreenStyle.buttonTitle}
                title={"ادامه"}
                linkTo={"welcome"}
              />
            </Row>
          </View>
        </View>
      </View>

    </ScrollView>
  )
};
