import React, {useState} from "react";
import {Button, Divider, Modal, Row, Text, TextInput, TouchableOpacity, View} from "../../../../elements";
import {BasketScreenStyle} from "../BasketScreen.style";
import {ScrollView} from "react-native";
import {typography} from "../../../../themes";
import {BasketHeader} from "../../subComponents/BasketHeader/BasketHeader";
import TextIcon from "../../../../components/TextIcon/TextIcon";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import {AddressItem} from "../../subComponents/AddressItem/AddressItem";

export const ThirdStep = ({basketStep, setBasketStep}) => {
  const [discountModalVisible, setDiscountModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDiscountModalVisible(!discountModalVisible);
  };

  return (
    <View style={BasketScreenStyle.full}>
      <ScrollView style={BasketScreenStyle.container}>
        <BasketHeader basketStep={basketStep} setBasketStep={setBasketStep}/>

        <Row style={{
          marginHorizontal: 30,
          justifyContent: 'space-between',
        }}>
          <Text>آدرس</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
            linkTo={"address"}
          >
            <AssetsComponent name={AssetFilesName.plus} width={13} height={13}/>
            <Text style={{
              color: '#19c978',
              fontSize: 13,
              fontFamily: typography.bold,
              marginHorizontal: 10
            }}>افزودن آدرس</Text>
          </TouchableOpacity>
        </Row>

        <AddressItem/>

        <Divider style={{margin: 10}}/>
        <View style={{marginHorizontal: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#e6e6e6',
              borderRadius: 15,
              padding: 15,
              marginVertical: 5
            }}>
            <Row style={{alignItems: 'flex-start'}}>
              <AssetsComponent name={AssetFilesName.radioButton} width={13} height={13} style={{marginTop: 3}}/>

              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 13,
                  fontFamily: typography.bold,
                  lineHeight: 20
                }}>اکسپرس فیش دلیوری</Text>
                <Text style={{
                  color: '#999999',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>فقط تهران</Text>
                <Text style={{
                  color: '#4d4d4d',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>هزینه ارسال رایگان</Text>
              </View>
              <AssetsComponent name={AssetFilesName.motor} width={42} height={25}/>
            </Row>
            <Button
              buttonStyle={{
                backgroundColor: '#19c978',
                borderWidth: 0,
                marginTop: 15
              }}
              titleStyle={{
                color: '#ffffff',
                fontSize: 18
              }}
              title={"انتخاب بازه زمانی ارسال"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e6e6e6',
              borderRadius: 15,
              padding: 15,
              marginVertical: 5
            }}>
            <Row style={{alignItems: 'flex-start'}}>
              <AssetsComponent name={AssetFilesName.radio} width={13} height={13} style={{marginTop: 3}}/>

              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 13,
                  fontFamily: typography.bold,
                  lineHeight: 20
                }}>پست پیشتاز</Text>
                <Text style={{
                  color: '#999999',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>۴ الی ۵ روز کاری</Text>
                <Text style={{
                  color: '#4d4d4d',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>هزینه ارسال رایگان</Text>
              </View>
              <AssetsComponent name={AssetFilesName.motor} width={42} height={25}/>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e6e6e6',
              borderRadius: 15,
              padding: 15,
              marginVertical: 5
            }}>
            <Row style={{alignItems: 'flex-start'}}>
              <AssetsComponent name={AssetFilesName.radio} width={13} height={13} style={{marginTop: 3}}/>

              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 13,
                  fontFamily: typography.bold,
                  lineHeight: 20
                }}>جت</Text>
                <Text style={{
                  color: '#999999',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>تا ۳ ساعت پس از ثبت هزینه</Text>
                <Text style={{
                  color: '#4d4d4d',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>۳۰.۰۰۰ تومان</Text>
              </View>
              <AssetsComponent name={AssetFilesName.motor} width={42} height={25}/>
            </Row>
          </TouchableOpacity>

        </View>
        <Divider style={{margin: 10}}/>

        <TextIcon
          containerStyle={{
            backgroundColor: 'transparent'
          }}
          iconName={"tree"}
          iconWidth={25}
          iconHeight={35}
          textStyle={{
            color: '#999999',
          }}
          title={'حفظ یک درخت، با استفاده از فاکتور الکترونیکی'}
        />

        <Button
          buttonStyle={BasketScreenStyle.button}
          titleStyle={BasketScreenStyle.buttonTitle}
          title={"تایید آدرس"}
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
