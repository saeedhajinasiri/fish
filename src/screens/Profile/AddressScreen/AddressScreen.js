import React from 'react';
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {AddressScreenStyle} from "./AddressScreen.style";
import {ScrollView} from 'react-native';
import Divider from "../../../elements/Divider/Divider";

export const AddressScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={AddressScreenStyle.container}>
        <View style={AddressScreenStyle.fullHeight}>

          <View style={AddressScreenStyle.wrapper}>
            <View style={AddressScreenStyle.loginBox}>
              <Text style={AddressScreenStyle.description}>اطلاعات شخصی تحویل گیرنده</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"نام"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"نام خانوادگی"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"کد ملی"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
              </View>
              <Text style={AddressScreenStyle.description}>اطلاعات ارسال</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"شماره تلفن همراه"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"شماره تلفن ثابت"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"استان"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"شهر"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    containerStyle={AddressScreenStyle.textInputContainer}
                    placeholder={"کد پستی"}
                    style={AddressScreenStyle.mobileInput}/>
                </Row>
                <Row>
                  <TextInput
                    multiline={true}
                    containerStyle={[AddressScreenStyle.textInputContainer, {height: 120}]}
                    placeholder={"آدرس پستی"}
                    style={[AddressScreenStyle.mobileInput, {height: 120}]}/>
                </Row>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <Divider style={{marginHorizontal: 10, marginTop: 10}}/>
      <Row>
        <Button
          buttonStyle={AddressScreenStyle.button}
          titleStyle={AddressScreenStyle.buttonTitle}
          title={"ثبت آدرس"}
          linkTo={"welcome"}
        />
      </Row>
      <Divider style={{marginHorizontal: 10, marginBottom: 10}}/>
    </View>
  )
};
