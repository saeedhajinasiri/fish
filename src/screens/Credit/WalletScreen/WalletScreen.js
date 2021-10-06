import React from 'react';
import {Row, Text, View} from "../../../elements";
import {WalletScreenStyle} from "./WalletScreen.style";
import Button from "../../../elements/Button";

export const WalletScreen = () => {
  return (
    <View style={WalletScreenStyle.container}>
      <View style={WalletScreenStyle.wrapper}>
        <View style={WalletScreenStyle.walletInfo}>

          <Row>
            <Text style={WalletScreenStyle.credit}>آخرین فعلی:</Text>
            <Text style={WalletScreenStyle.credit}>25000 تومان</Text>
          </Row>
          <Row>
            <Button
              buttonStyle={WalletScreenStyle.button}
              titleStyle={WalletScreenStyle.buttonTitle}
              title={"افزایش اعتبار"}
              linkTo={'credit'}
            />
          </Row>
          <Row style={{marginTop: 100}}>
            <Row style={WalletScreenStyle.headerTitleBox}>
              <Text style={WalletScreenStyle.headerInfo}>مبلغ</Text>
              <Text style={WalletScreenStyle.headerInfo}>تاریخ</Text>
              <Text style={WalletScreenStyle.headerInfo}>توضیحات</Text>
            </Row>
          </Row>
          <Row>
            <Row style={WalletScreenStyle.titleBox}>
              <Text style={WalletScreenStyle.info}>۲۰/۰۰۰ ت</Text>
              <Text style={WalletScreenStyle.info}>۱۴۰۰/۲/۲</Text>
              <Text style={WalletScreenStyle.info}>بابت تبلیغ</Text>
            </Row>
          </Row>
          <Row>
            <Row style={WalletScreenStyle.titleBox}>
              <Text style={WalletScreenStyle.info}>۲۰/۰۰۰ ت</Text>
              <Text style={WalletScreenStyle.info}>۱۴۰۰/۲/۲</Text>
              <Text style={WalletScreenStyle.info}>بابت تبلیغ</Text>
            </Row>
          </Row>
          <Row>
            <Row style={WalletScreenStyle.titleBox}>
              <Text style={WalletScreenStyle.info}>۲۰/۰۰۰ ت</Text>
              <Text style={WalletScreenStyle.info}>۱۴۰۰/۲/۲</Text>
              <Text style={WalletScreenStyle.info}>بابت تبلیغ</Text>
            </Row>
          </Row>
        </View>
      </View>
    </View>

  )
};
