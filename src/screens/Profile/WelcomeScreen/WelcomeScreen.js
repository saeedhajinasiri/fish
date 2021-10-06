import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {WelcomeScreenStyle} from "./WelcomeScreen.style";
import {AssetFilesName} from '../../../assets/AssetFiles';
import AssetsComponent from '../../../assets';


export const WelcomeScreen = () => {
  return (
    <View style={WelcomeScreenStyle.container}>
      <HeaderBanner
        type={"banner"}
      />

      <View style={WelcomeScreenStyle.wrapper}>
        <View style={WelcomeScreenStyle.loginBox}>
          <AssetsComponent
            name={AssetFilesName.welcome}
            width={85}
            height={85}
          />
          <Text style={WelcomeScreenStyle.title}>با موفقیت وارد شدید!</Text>
          <Text style={WelcomeScreenStyle.description}>لطفا حساب کاربری خود را تکمیل نمایید</Text>
          <Row>
            <Button
              linkTo={"basket"}
              buttonStyle={WelcomeScreenStyle.button}
              titleStyle={WelcomeScreenStyle.buttonTitle}
              title={"ادامه خرید"}/>
          </Row>
        </View>
      </View>

    </View>
  )
};
