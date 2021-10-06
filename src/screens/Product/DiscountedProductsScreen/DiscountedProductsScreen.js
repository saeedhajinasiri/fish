import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Row, Text, View} from "../../../elements";
import {DiscountedProductsScreenStyle} from "./DiscountedProductsScreen.style";
import Button from "../../../elements/Button";
import Divider from "../../../elements/Divider/Divider";
import {typography} from "../../../themes";
import TouchableOpacity from "../../../elements/TouchableOpacity/TouchableOpacity";
import AssetsComponent from "../../../assets";
import {AssetFilesName} from "../../../assets/AssetFiles";
import DiscountProduct from "../../../components/DiscountProduct/DiscountProduct";
import TextIcon from "../../../components/TextIcon/TextIcon";
import Modal from "../../../elements/Modal";
import Image from "../../../elements/Image";
import {BasketItemStyle} from "../../Basket/subComponents/BasketItem/BasketItem.style";

export const DiscountedProductsScreen = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortingModalVisible, setSortingModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const toggleSortingModal = () => {
    setSortingModalVisible(!sortingModalVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={DiscountedProductsScreenStyle.container}>
          <View style={DiscountedProductsScreenStyle.wrapper}>
            <View style={DiscountedProductsScreenStyle.walletInfo}>

              <Row style={{justifyContent: 'space-between'}}>
                <Text style={{color: '#2e3192', fontSize: 16, flex: 1}}>زمان باقیمانده تا پایان</Text>
                <Row style={{flexDirection: 'row'}}>
                  <View style={{
                    width: 37,
                    height: 40,
                    backgroundColor: '#f27baa',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{color: '#2e3192', fontSize: 23, marginTop: 5, fontFamily: typography.light}}>۹</Text>
                  </View>
                  <Text style={{color: '#f27baa', fontSize: 23, fontFamily: typography.light}}>:</Text>
                  <View style={{
                    width: 37,
                    height: 40,
                    backgroundColor: '#f27baa',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{color: '#2e3192', fontSize: 23, marginTop: 5, fontFamily: typography.light}}>۱۱</Text>
                  </View>
                  <Text style={{color: '#f27baa', fontSize: 23, fontFamily: typography.light}}>:</Text>
                  <View style={{
                    width: 37,
                    height: 40,
                    backgroundColor: '#f27baa',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{color: '#2e3192', fontSize: 23, marginTop: 5, fontFamily: typography.light}}>۳۲</Text>
                  </View>
                </Row>
              </Row>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                <Row style={{flex: 1}}>
                  <Button
                    onPress={toggleFilterModal}
                    icon={"filter"}
                    buttonStyle={DiscountedProductsScreenStyle.showButton}
                    titleStyle={DiscountedProductsScreenStyle.showButtonTitle}
                    iconStyle={{width: 12, height: 12}}
                    title={"فیلتر کردن"}
                  />
                  <Button
                    onPress={toggleSortingModal}
                    icon={"sort"}
                    buttonStyle={[DiscountedProductsScreenStyle.showButton, {marginHorizontal: 10}]}
                    titleStyle={DiscountedProductsScreenStyle.showButtonTitle}
                    iconStyle={{width: 12, height: 12}}
                    title={"مرتب سازی"}
                  />
                </Row>
                <TouchableOpacity onPress={() => alert('toggle list')}>
                  <AssetsComponent name={AssetFilesName.toggleList} width={22} height={22} style={{marginTop: 3}}/>
                </TouchableOpacity>
              </Row>
              <Divider style={{marginHorizontal: 0, marginVertical: 10}}/>

              <Row style={{flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <DiscountProduct
                  containerStyle={{
                    marginBottom: 15,
                    backgroundColor: 'white'
                  }}
                  type={"vertical"}/>
                <DiscountProduct
                  containerStyle={{
                    marginBottom: 15,
                    backgroundColor: 'white'
                  }}
                  type={"vertical"}/>
                <DiscountProduct
                  containerStyle={{
                    marginBottom: 15,
                    backgroundColor: 'white'
                  }}
                  type={"vertical"}/>
                <DiscountProduct
                  containerStyle={{
                    marginBottom: 15,
                    backgroundColor: 'white'
                  }}
                  type={"vertical"}/>
              </Row>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
      wrapperContentStyle={{flex: 0.3}}
      toggleModal={() => toggleFilterModal()}
      isVisible={filterModalVisible}>
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
            onPress={() => toggleFilterModal()}>
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
      <Modal
        wrapperContentStyle={{flex: 0.4}}
        toggleModal={() => toggleSortingModal()}
        isVisible={sortingModalVisible}>
        <View
          style={{
            marginVertical: 15,
            flex: 1
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: typography.bold,
              color: '#333333',
              textAlign: 'center',
              marginBottom: 30
            }}
          >مرتب سازی لیست محصولات</Text>
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent'
            }}
            iconWidth={12}
            iconHeight={12}
            iconName={'radio'}
            title={'مرتب سازی'}
            textStyle={{
              color: '#808080'
            }}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent'
            }}
            iconWidth={12}
            iconHeight={12}
            iconName={'radio'}
            title={'بیشترین قیمت'}
            textStyle={{
              color: '#808080'
            }}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent'
            }}
            iconWidth={12}
            iconHeight={12}
            iconName={'radio'}
            title={'جدیدترین ها'}
            textStyle={{
              color: '#808080'
            }}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent'
            }}
            iconWidth={12}
            iconHeight={12}
            iconName={'radio'}
            title={'بیشترین تخفیف'}
            textStyle={{
              color: '#808080'
            }}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent'
            }}
            iconWidth={12}
            iconHeight={12}
            iconName={'radio'}
            title={'بیشترین فروش'}
            textStyle={{
              color: '#808080'
            }}
          />
        </View>
      </Modal>
    </View>
  )
};
