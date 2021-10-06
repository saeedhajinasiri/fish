import React from 'react';
import {Button, Row, Text, TextInput, View} from "../../../elements";
import {CreditScreenStyle} from "./CreditScreen.style";

export const CreditScreen = () => {
  return (
    <View style={CreditScreenStyle.container}>
      <View style={CreditScreenStyle.wrapper}>
        <View style={CreditScreenStyle.creditInfo}>

          <Row style={CreditScreenStyle.creditRow}>
            <Text style={CreditScreenStyle.creditTitle}>موجودی فعلی:</Text>
            <Text style={CreditScreenStyle.creditTitle}>0 تومان</Text>
          </Row>

          <Row>
            <Row style={CreditScreenStyle.buttonContainer}>
              <Button
                titleStyle={CreditScreenStyle.creditButtonTitle}
                buttonStyle={CreditScreenStyle.creditButton}
                      title={'۱۰/۰۰۰ ت'}/>
              <Button
                titleStyle={{...CreditScreenStyle.creditButtonTitle, ...CreditScreenStyle.checkedButtonTitle}}
                buttonStyle={{...CreditScreenStyle.creditButton, ...CreditScreenStyle.checkedButton}}
                      title={'۱۰/۰۰۰ ت'}/>
            </Row>
          </Row>

          <Row>
            <Row style={CreditScreenStyle.buttonContainer}>
              <Button
                titleStyle={CreditScreenStyle.creditButtonTitle}
                buttonStyle={CreditScreenStyle.creditButton}
                      title={'۱۰/۰۰۰ ت'}/>
              <Button
                titleStyle={CreditScreenStyle.creditButtonTitle}
                buttonStyle={CreditScreenStyle.creditButton}
                      title={'۱۰/۰۰۰ ت'}/>
            </Row>
          </Row>

          <Row style={{alignItems: 'center', marginHorizontal: 20}}>
            <TextInput
              containerStyle={CreditScreenStyle.textInput}
              style={CreditScreenStyle.text}
              placeholder={'مبلغ دلخواه'}
            />
            <Row style={CreditScreenStyle.labelWrapper}>
              <Text style={CreditScreenStyle.label}>تومان</Text>
            </Row>
          </Row>
          <Row>
            <Button
              onPress={() => alert('hi')}
              buttonStyle={CreditScreenStyle.button}
              titleStyle={CreditScreenStyle.buttonTitle}
              title={"افزایش اعتبار"}
              linkTo={'credit'}
            />
          </Row>
        </View>
      </View>

    </View>
  )
};
