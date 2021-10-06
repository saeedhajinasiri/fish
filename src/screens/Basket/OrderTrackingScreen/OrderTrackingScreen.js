import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {OrderTrackingScreenStyle} from "./OrderTrackingScreen.style";

export const OrderTrackingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={OrderTrackingScreenStyle.container}>
        <View style={OrderTrackingScreenStyle.wrapper}>
          <Row style={OrderTrackingScreenStyle.titleBox}>
            <Row style={OrderTrackingScreenStyle.full}>
              <Text style={OrderTrackingScreenStyle.title}>برای پیگیری سفارش لطفا شماره سفارش را وارد کنید.</Text>
            </Row>
          </Row>
          <Row style={OrderTrackingScreenStyle.full}>
            <View style={{flex: 1}}>
              <TextInput
                placeholder={"شماره همراه"}
                style={OrderTrackingScreenStyle.textInput}
                containerStyle={OrderTrackingScreenStyle.textInputContainer}/>
              <TextInput
                placeholder={"شماره سفارش"}
                style={OrderTrackingScreenStyle.textInput}
                containerStyle={OrderTrackingScreenStyle.textInputContainer}/>
              <Button
                style={OrderTrackingScreenStyle.button}
                titleStyle={OrderTrackingScreenStyle.buttonTitle}
                title={"پیگیری"}/>
            </View>
          </Row>
        </View>

      </ScrollView>

    </View>
  )
};
