import React, {useState} from "react";
import {Button, Divider, Modal, Row, Text, TextInput, View} from "../../../../elements";
import {BasketScreenStyle} from "../BasketScreen.style";
import {ScrollView} from "react-native";
import {BasketItem} from "../../subComponents/BasketItem/BasketItem";
import {typography} from "../../../../themes";
import {BasketHeader} from "../../subComponents/BasketHeader/BasketHeader";

export const SecondStep = ({basketStep, setBasketStep}) => {
  const [discountModalVisible, setDiscountModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDiscountModalVisible(!discountModalVisible);
  };

  return (
    <View style={BasketScreenStyle.full}>
      <ScrollView style={BasketScreenStyle.container}>
        <BasketHeader basketStep={basketStep} setBasketStep={setBasketStep}/>

        <BasketItem/>
        <BasketItem/>

        <View style={{
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 30,
        }}>
          <Text
            style={{
              color: '#2e3192',
              fontSize: 18
            }}>آیا کد تخفیف دارید؟</Text>
          <Text
            style={{
              color: '#808080',
              fontSize: 13,
              fontFamily: typography.light
            }}>کد تخفیف خود را وارد کنید:</Text>
          <Button
            onPress={toggleDeleteModal}
            buttonStyle={{
              flex: 1,
              width: '100%',
              borderColor: '#19c978',
              marginTop: 15
            }}
            titleStyle={{
              color: '#19c978',
              marginHorizontal: 10,
              fontSize: 18
            }}
            icon={'discountSquare'}
            iconStyle={{
              width: 25,
              height: 14,
              resizeMode: 'contain',
              tintColor: '#19c978',
              marginHorizontal: 10
            }}
            title={"ثبت کد تخــفیف"}
          />
        </View>
        <Divider style={{margin: 10}}/>
        <Text style={{color: '#f27baa', fontFamily: typography.light, lineHeight: 20, marginHorizontal: 30}}>افزودن کالا
          به سبد خرید به معنی رزرو آن نیست. با توجه به
          محدودیت موجودی سبد ...</Text>

        <Button
          buttonStyle={BasketScreenStyle.button}
          titleStyle={BasketScreenStyle.buttonTitle}
          title={"ثبت سبد و مرحله بعد"}
        />

      </ScrollView>

      <Modal
        wrapperContentStyle={{flex: 0.4}}
        toggleModal={() => toggleDeleteModal()}
        isVisible={discountModalVisible}>
        <View style={BasketScreenStyle.discountModalWrapper}>
          <View style={{alignItems: 'center'}}>
            <Text style={BasketScreenStyle.discountModalTitle}>کد تخفیف خود را وارد کنید</Text>
            <TextInput containerStyle={BasketScreenStyle.discountInput}/>
          </View>
          <View>
            <Divider/>
            <Button
              titleStyle={BasketScreenStyle.discountTitle}
              buttonStyle={BasketScreenStyle.discountButton}
              title={"ثبت کد تخفیف"}/>
            <Divider/>
          </View>
        </View>
      </Modal>
    </View>
  )
};
