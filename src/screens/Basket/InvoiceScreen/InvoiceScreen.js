import React, {useState} from 'react';
import {Row, Text, View} from "../../../elements";
import {Dimensions, ScrollView} from "react-native";
import {InvoiceScreenStyle} from "./InvoiceScreen.style";
import AssetsComponent from "../../../assets";
import {AssetFilesName} from "../../../assets/AssetFiles";
import {typography} from "../../../themes";
import Divider from "../../../elements/Divider/Divider";
import TouchableOpacity from "../../../elements/TouchableOpacity/TouchableOpacity";
import Image from "../../../elements/Image";
import {BasketItemStyle} from "../subComponents/BasketItem/BasketItem.style";
import Modal from "../../../elements/Modal";

const {width} = Dimensions.get('screen');

export const InvoiceScreen = () => {
  const [discountModalVisible, setDiscountModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDiscountModalVisible(!discountModalVisible);
  };

  return (
    <View style={InvoiceScreenStyle.container}>
      <ScrollView style={InvoiceScreenStyle.wrapper}>
        <View style={InvoiceScreenStyle.creditInfo}>

          <AssetsComponent name={AssetFilesName.invoice} width={90} height={90} style={{marginTop: 3}}/>

          <Row style={InvoiceScreenStyle.creditRow}>
            <AssetsComponent name={AssetFilesName.invoiceBullet} width={18} height={26}/>
            <Text style={InvoiceScreenStyle.creditTitle}>با تشکر از خرید شما</Text>
          </Row>

          <Row style={InvoiceScreenStyle.creditRow}>
            <Text style={{
              color: '#999999',
              fontSize: 12,
              fontFamily: typography.light,
              marginHorizontal: 10,
              lineHeight: 20
            }}>پرداخت شما با موفقیت انجام شد و سفارش در راه است.
              شماره پیگیری: 66995522336</Text>
          </Row>

          <Row>
            <View style={{marginVertical: 15, marginHorizontal: 30, flex: 1}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 15,
                fontFamily: typography.bold
              }}>خلاصه سفارش شما</Text>
              <Divider/>
              <Row style={{
                marginTop: 10,
                justifyContent: 'space-between'
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>شماره سفارش:</Text>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>۳۶۲۵۹</Text>
              </Row>
              <Row style={{
                justifyContent: 'space-between'
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>تاریخ سفارش:</Text>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>۲۰ تیر ۱۴۰۰</Text>
              </Row>
              <Row style={{
                marginTop: 20,
                justifyContent: 'space-between'
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>مبلغ کل خرید:</Text>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>۱.۴۰۰.۰۰۰ ت</Text>
              </Row>
              <Row style={{
                justifyContent: 'space-between'
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>هزینه ارسال، بیمه و بسته بندی:</Text>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>رایگان</Text>
              </Row>
              <Row style={{
                justifyContent: 'space-between'
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>تخفیف:</Text>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>۱۰۰۰ ت</Text>
              </Row>
              <Row style={{
                justifyContent: 'space-between',
                marginBottom: 20
              }}>
                <Text style={{
                  color: '#2e3192',
                  lineHeight: 28
                }}>مبلغ قابل پرداخت:</Text>
                <Text style={{
                  color: '#ff7bac',
                  fontSize: 15,
                  fontFamily: typography.bold,
                  lineHeight: 28
                }}>۱.۴۰۰.۰۰۰ ت</Text>
              </Row>
              <Divider/>
              <Text style={{
                fontSize: 13,
                fontFamily: typography.light,
                color: '#666666',
                lineHeight: 22,
                marginVertical: 20,
              }}>این سفارس در بازه ساعت 17 - 21 تاریخ 3/5/1400 به دست ایران ایرانیان به آدرس تهران و شماره همراه 0912
                خواهد رسید.</Text>
            </View>

          </Row>

          <Row style={{flexWrap: 'wrap', justifyContent: 'space-between', paddingVertical: 10, marginHorizontal: 30}}>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 100) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
              <View
                style={{
                  backgroundColor: '#f27baa',
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{color: '#2e3192', fontSize: 10}}>۲</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 100) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
              <View
                style={{
                  backgroundColor: '#f27baa',
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{color: '#2e3192', fontSize: 10}}>۲</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 100) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
              <View
                style={{
                  backgroundColor: '#f27baa',
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{color: '#2e3192', fontSize: 10}}>۲</Text>
              </View>
            </TouchableOpacity>
          </Row>
        </View>
      </ScrollView>

      <Modal
        wrapperContentStyle={{flex: 0.3}}
        toggleModal={() => toggleDeleteModal()}
        isVisible={discountModalVisible}>
        <Row
          style={{
            marginVertical: 15,
          }}>
          <View>
            <Image
              style={BasketItemStyle.image}
              width={150}
              resizeMode={"cover"}
              height={120}
              source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                width: 20,
                height: 20,
                borderRadius: 20,
                position: 'absolute',
                right: 5,
                top: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{color: '#2e3192', fontSize: 10}}>۲</Text>
            </View>
          </View>
          <View style={BasketItemStyle.infoWrapper}>
            <Text style={BasketItemStyle.title}>ماهی قزل آلا متوسط</Text>
            <Row style={BasketItemStyle.justifyContentBetween}>
              <Text style={BasketItemStyle.blueTitle}>30 عدد در کیلوگرم</Text>
            </Row>
            <Row style={BasketItemStyle.justifyContentBetween}>
              <Row>
                <Text style={BasketItemStyle.blueTitle}>رنگ: </Text>
                <Text style={BasketItemStyle.pinkValue}>سفید</Text>
              </Row>
              <Row>
                <Text style={BasketItemStyle.blueTitle}>سایز: </Text>
                <Text style={BasketItemStyle.pinkValue}>کوچک</Text>
              </Row>
            </Row>
            <Row style={BasketItemStyle.full}>
              <Text style={BasketItemStyle.blueTitle}>کد کالا: </Text>
              <Text style={BasketItemStyle.pinkValue}>231222554</Text>
            </Row>
          </View>
        </Row>
      </Modal>
    </View>
  )
};
