import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Row, Text, View} from "../../../elements";
import {ProductScreenStyle} from "./ProductScreen.style";
import Button from "../../../elements/Button";
import Divider from "../../../elements/Divider/Divider";
import {typography} from "../../../themes";
import TouchableOpacity from "../../../elements/TouchableOpacity/TouchableOpacity";
import AssetsComponent from "../../../assets";
import {AssetFilesName} from "../../../assets/AssetFiles";
import DiscountProduct from "../../../components/DiscountProduct/DiscountProduct";
import Image from "../../../elements/Image";
import {BasketItemStyle} from "../../Basket/subComponents/BasketItem/BasketItem.style";
import Modal from "../../../elements/Modal";
import TextIcon from "../../../components/TextIcon/TextIcon";

export const ProductScreen = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortingModalVisible, setSortingModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const toggleSortingModal = () => {
    setSortingModalVisible(!sortingModalVisible);
  };

  const toggleUpdateModal = () => {
    setUpdateModalVisible(!updateModalVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={ProductScreenStyle.container}>
          <View style={ProductScreenStyle.wrapper}>
            <View style={ProductScreenStyle.walletInfo}>

              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                <Row style={{flex: 1}}>
                  <Button
                    onPress={toggleFilterModal}
                    icon={"filter"}
                    buttonStyle={ProductScreenStyle.showButton}
                    titleStyle={ProductScreenStyle.showButtonTitle}
                    iconStyle={{width: 12, height: 12}}
                    title={"فیلتر کردن"}
                  />
                  <Button
                    onPress={toggleSortingModal}
                    icon={"sort"}
                    buttonStyle={[ProductScreenStyle.showButton, {marginHorizontal: 10}]}
                    titleStyle={ProductScreenStyle.showButtonTitle}
                    iconStyle={{width: 12, height: 12}}
                    title={"مرتب سازی"}
                  />
                </Row>
                <TouchableOpacity onPress={toggleUpdateModal}>
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
        full={true}
        toggleModal={() => toggleFilterModal()}
        isVisible={filterModalVisible}>
        <>
          <View
            style={{
              flex: 1,
              margin: 10
            }}>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>نمایش فقط کالاهای موجود</Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
            <Divider style={{marginVertical: 10}}/>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>دسته بندی</Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
            <Divider style={{marginVertical: 10}}/>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>سایز</Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
            <Divider style={{marginVertical: 10}}/>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>مدل پاک کردن</Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
            <Divider style={{marginVertical: 10}}/>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>بسته چند گرمی</Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
            <Divider style={{marginVertical: 10}}/>
            <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{
                color: '#2e3192',
                fontSize: 17
              }}>قیمت
                <Text style={{
                  color: '#2e3192',
                  fontFamily: typography.light,
                  fontSize: 15
                }}>(تومان)</Text>
              </Text>
              <AssetsComponent name={AssetFilesName.arrowDown} width={14} height={7}/>
            </Row>
          </View>
          <View style={{margin: 10}}>
            <Divider/>
            <Button
              onPress={() => toggleFilterModal()}
              buttonStyle={{
                backgroundColor: '#19c978',
                borderWidth: 0,
                marginVertical: 10,
                marginHorizontal: 20
              }}
              titleStyle={{
                color: '#ffffff',
                fontSize: 18
              }}
              title={"اعمال فیلتر"}
            />
            <Divider/>
          </View>
        </>
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
      <Modal
        wrapperContentStyle={{flex: 0.4}}
        toggleModal={() => toggleUpdateModal()}
        isVisible={updateModalVisible}>
        <View
          style={{
            marginVertical: 15,
            flex: 1,
            alignItems: 'center'
          }}>
          <AssetsComponent name={AssetFilesName.logoUpdate} width={95} height={95}/>
          <Text style={{
            color: '#2e3192',
            fontSize: 14,
            marginVertical: 20
          }}>برای استفاده از اپلیکیشن نیاز به بروزرسانی دارید</Text>

          <Row>
            <Button
              buttonStyle={{
                flex: 1,
                backgroundColor: '#19c978',
                borderWidth: 0,
                marginVertical: 10
              }}
              titleStyle={{
                color: 'white',
                fontSize: 18
              }}
              title={"بروزرسانی"}
            />
          </Row>
          <Row>
            <Button
              buttonStyle={{
                flex: 1,
                backgroundColor: 'transparent',
                borderColor: '#2e3192'
              }}
              titleStyle={{
                fontSize: 18,
                color: '#999999'
              }}
              title={"نه بیخیال"}
            />
          </Row>
        </View>
      </Modal>
    </View>
  )
};
