import React, {useState} from "react";
import {Button, Text, View, Row} from "../../../../elements";
import {BasketScreenStyle} from "../BasketScreen.style";
import {Dimensions, ScrollView} from "react-native";
import {BasketHeader} from "../../subComponents/BasketHeader/BasketHeader";
import {typography} from "../../../../themes";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import Divider from "../../../../elements/Divider/Divider";
import TouchableOpacity from "../../../../elements/TouchableOpacity/TouchableOpacity";
import {BasketItemStyle} from "../../subComponents/BasketItem/BasketItem.style";
import Image from "../../../../elements/Image";
import TextInput from "../../../../elements/TextInput";
import Modal from "../../../../elements/Modal";

const {width} = Dimensions.get('screen');

export const FourthStep = ({basketStep, setBasketStep}) => {
  const [discountModalVisible, setDiscountModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDiscountModalVisible(!discountModalVisible);
  };

  return (
    <View style={BasketScreenStyle.full}>
      <ScrollView style={BasketScreenStyle.container}>
        <BasketHeader basketStep={basketStep} setBasketStep={setBasketStep}/>

        <View style={{
          marginHorizontal: 30
        }}>
          <Text style={{
            color: '#2e3192',
            fontSize: 15,
            fontFamily: typography.bold
          }}>
            انتخاب شیوه ی پرداخت
          </Text>

          <Row style={{marginVertical: 10}}>
            <AssetsComponent name={AssetFilesName.radio} width={17} height={17} style={{marginTop: 3}}/>
            <View style={{
              marginHorizontal: 5,
              flex: 1
            }}>
              <Text style={{
                color: '#2e3192',
                fontSize: 12
              }}>
                پرداخت اینترنتی
              </Text>
              <Text style={{
                color: '#999999',
                fontSize: 12
              }}>پرداخت از طریق کلیه کارتهای عضو شتاب</Text>
              <Row style={{justifyContent: 'space-between', flex: 1}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#999999',
                    borderRadius: 4,
                    width: 90,
                    height: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 2,
                    borderColor: '#2e3192'
                  }}
                >
                  <AssetsComponent name={AssetFilesName.bankMellat} width={75} height={75} style={{marginTop: 3}}/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#999999',
                    borderRadius: 4,
                    width: 90,
                    height: 90,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <AssetsComponent name={AssetFilesName.bankSaman} width={75} height={75} style={{marginTop: 3}}/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#999999',
                    borderRadius: 4,
                    width: 90,
                    height: 90,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <AssetsComponent name={AssetFilesName.bankPasargad} width={75} height={75} style={{marginTop: 3}}/>
                </TouchableOpacity>
              </Row>
            </View>

          </Row>

          <Row style={{marginVertical: 10}}>
            <AssetsComponent name={AssetFilesName.radioButton} width={17} height={17} style={{marginTop: 3}}/>
            <View style={{
              marginHorizontal: 5
            }}>
              <Text style={{
                color: '#2e3192',
                fontSize: 12
              }}>پرداخت با کیف پول</Text>
              <Text style={{
                color: '#ff7bac',
                fontSize: 12
              }}>موجودی شما برای این خرید، 000/20 ت کم است!</Text>

              <Button
                buttonStyle={{
                  alignSelf: 'center',
                  width: 120,
                  borderColor: '#2e3192',
                  borderWidth: 2,
                  marginVertical: 5
                }}
                titleStyle={{
                  color: '#2e3192',
                  fontSize: 12
                }}
                title={"افزایش اعتبار"}
              />
            </View>
          </Row>

          <Divider/>
          <View style={{marginVertical: 15}}>
            <Text style={{
              color: '#2e3192',
              fontSize: 15,
              fontFamily: typography.bold
            }}>خلاصه سفارش شما</Text>
            <Row style={{
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
              justifyContent: 'space-between'
            }}>
              <Text style={{
                color: '#2e3192',
                lineHeight: 28
              }}>مبلغ قابل پرداخت:</Text>
              <Text style={{
                color: '#ff7bac',
                lineHeight: 28
              }}>۱.۴۰۰.۰۰۰ ت</Text>
            </Row>
          </View>
          <Divider/>
          <Text style={{
            fontSize: 13,
            fontFamily: typography.light,
            color: '#666666',
            lineHeight: 22,
            marginVertical: 20,
          }}>این سفارس در بازه ساعت 17 - 21 تاریخ 3/5/1400 به دست ایران ایرانیان به آدرس تهران و شماره همراه 0912
            خواهد رسید.</Text>
          <Divider/>

          <Row style={{flexWrap: 'wrap', justifyContent: 'space-between', paddingVertical: 10}}>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 80) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 80) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDeleteModal} style={{marginVertical: 10}}>
              <Image
                style={BasketItemStyle.image}
                width={(width - 80) / 2}
                resizeMode={"cover"}
                height={120}
                source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
              />
            </TouchableOpacity>
          </Row>
        </View>
        <Button
          linkTo={"invoice"}
          buttonStyle={{
            marginHorizontal: 30,
            marginVertical: 10,
            height: 46,
            backgroundColor: '#19c978',
            borderRadius: 23,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0
          }}
          titleStyle={{
            color: '#ffffff',
            fontSize: 18
          }}
          title={"پرداخت و تکمیل خرید"}
        />

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
            <TouchableOpacity
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
              }}
              onPress={() => toggleDeleteModal()}>
              <Text style={{color: '#2e3192', fontSize: 10}}>۲</Text>
            </TouchableOpacity>
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
