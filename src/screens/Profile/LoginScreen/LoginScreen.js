import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {LoginScreenStyle} from "./LoginScreen.style";


export const LoginScreen = () => {
  return (
    <View style={LoginScreenStyle.container}>
      <HeaderBanner
        type={"banner"}
      />

      <View style={LoginScreenStyle.wrapper}>
        <View style={LoginScreenStyle.loginBox}>
          <Text style={LoginScreenStyle.title}>ورود یا ثبت نام</Text>
          <Text style={LoginScreenStyle.description}>لطفا برای ادامه شماره همراه خود را وارد کنید</Text>
          <Row>
            <TextInput
              containerStyle={{
                marginHorizontal: 0,
                alignItems: 'center'
              }}
              placeholder={"09"}
              style={LoginScreenStyle.mobileInput}/>
          </Row>
          <Row>
            <Button
              linkTo={"register"}
              buttonStyle={LoginScreenStyle.button}
              titleStyle={LoginScreenStyle.buttonTitle}
              title={"ادامه"}/>
          </Row>
        </View>
      </View>

    </View>
  )
};
