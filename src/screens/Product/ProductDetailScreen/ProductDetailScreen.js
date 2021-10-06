import React from 'react';
import {ScrollView} from 'react-native';
import {Row, Text, View} from "../../../elements";
import {ProductDetailScreenStyle} from "./ProductDetailScreen.style";
import Button from "../../../elements/Button";
import Divider from "../../../elements/Divider/Divider";
import {typography} from "../../../themes";
import TouchableOpacity from "../../../elements/TouchableOpacity/TouchableOpacity";
import AssetsComponent from "../../../assets";
import {AssetFilesName} from "../../../assets/AssetFiles";
import Carousel from "../../../components/Carousel/Carousel";
import {Images} from "./ImageSlider";
import HomeInformationStyle from "../../Home/subComponents/HomeInformation/HomeInformation.style";
import SimilarProducts from "../subComponents/SimilarProducts";
import SimilarBlog from "../subComponents/SimilarBlog/SimilarBlog";
import Breadcrumbs from "../subComponents/Breadcrumbs/Breadcrumbs";

export const ProductDetailScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={ProductDetailScreenStyle.container}>
          <View style={ProductDetailScreenStyle.wrapper}>
            <Carousel Images={Images} Delay={4000}/>

            <Divider style={{margin: 10}}/>
            <View style={{width: '100%'}}>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 17
                }}>توضیحات</Text>
                <Text style={{
                  color: '#666666',
                  fontSize: 13,
                  fontFamily: typography.light,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: "solid",
                  textDecorationColor: "#2e3192",
                }}>۱.۳۰۰.۰۰۰ ت</Text>
              </Row>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  alignSelf: 'flex-start',
                  color: '#4d4d4d',
                  fontFamily: typography.light,
                  fontSize: 13
                }}>۳۰ کیلو </Text>
                <View>
                  <Text style={{
                    color: '#19c978',
                    fontSize: 17,
                    fontFamily: typography.bold
                  }}>۱.۲۰۰.۰۰۰ ت</Text>
                  <Text style={{
                    color: '#b3b3b3',
                    fontSize: 13,
                    fontFamily: typography.light
                  }}>هر کیلوگرم</Text>
                </View>
              </Row>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#b3b3b3',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>وزن میانگین هر ماهی 3 کیلوگرم میباشد.</Text>
              </Row>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#ff7bac',
                  fontSize: 13,
                  fontFamily: typography.bold
                }}>تحویل: از 3 روز دیگر</Text>
              </Row>
              <Divider style={{margin: 10}}/>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 17
                }}>زمان باقی مانده:</Text>
                <Row style={{flexDirection: 'row'}}>
                  <View style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#2e3192",
                    borderRadius: 7,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color: "#fff", fontSize: 16, fontFamily: typography.bold}}>۹</Text>
                  </View>
                  <Text
                    style={{color: "#2e3192", marginHorizontal: 5, fontSize: 16, fontFamily: typography.bold}}>:</Text>
                  <View style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#2e3192",
                    borderRadius: 7,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color: "#fff", fontSize: 16, fontFamily: typography.bold}}>11</Text>
                  </View>
                  <Text
                    style={{color: "#2e3192", marginHorizontal: 5, fontSize: 16, fontFamily: typography.bold}}>:</Text>
                  <View style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#2e3192",
                    borderRadius: 7,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color: "#fff", fontSize: 16, fontFamily: typography.bold}}>43</Text>
                  </View>
                </Row>
              </Row>
              <Divider style={{margin: 10}}/>
              <View style={{marginHorizontal: 20}}>
                <Text style={{
                  color: '#999999',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>سایز:</Text>
                <Row style={{marginVertical: 10}}>
                  <Button
                    titleStyle={{
                      color: '#ffffff',
                      marginHorizontal: 5,
                      fontSize: 12,
                      fontFamily: typography.light
                    }}
                    buttonStyle={{
                      height: 25,
                      backgroundColor: '#ff7bac',
                      borderWidth: 0
                    }}
                    title={"بسته ۲K"}/>
                  <Button
                    titleStyle={{
                      color: '#999999',
                      marginHorizontal: 5,
                      fontSize: 12,
                      fontFamily: typography.light
                    }}
                    buttonStyle={{
                      height: 25,
                      marginHorizontal: 10,
                      borderColor: '#2e3192'
                    }}
                    title={"بسته 5K"}/>
                </Row>
              </View>
              <Divider style={{margin: 10}}/>
              <View style={{marginHorizontal: 20}}>
                <Text style={{
                  color: '#999999',
                  fontSize: 13,
                  fontFamily: typography.light
                }}>کیلوگرم:</Text>
                <Row style={{marginVertical: 10}}>
                  <Row style={{borderColor: '#2e3192', borderWidth: 1, borderRadius: 25}}>
                    <Button
                      titleStyle={{
                        color: '#2e3192',
                        marginHorizontal: 5,
                        fontSize: 30,
                        fontFamily: typography.light
                      }}
                      buttonStyle={{
                        height: 25,
                        borderWidth: 0
                      }}
                      title={"+"}/>
                    <Text style={{
                      marginHorizontal: 25,
                      paddingTop: 2
                    }}>۲</Text>
                    <Button
                      titleStyle={{
                        color: '#2e3192',
                        fontSize: 30,
                        fontFamily: typography.light
                      }}
                      buttonStyle={{
                        borderWidth: 0,
                        height: 25,
                        marginHorizontal: 10,
                        borderColor: '#2e3192'
                      }}
                      title={"-"}/>
                  </Row>
                </Row>
              </View>
              <Divider style={{margin: 10}}/>
              <Row style={HomeInformationStyle.purchaseInfo}>
                <TouchableOpacity style={HomeInformationStyle.alignItemsCenter}
                                  onPress={() => alert('ضمانت بازگشت کالا')}>
                  <Text style={HomeInformationStyle.purchaseTitle}>ضمانت بازگشت کالا</Text>
                  <AssetsComponent name={AssetFilesName.returnGuarantee} resizeMode={"contain"} width={48} height={53}/>
                </TouchableOpacity>
                <TouchableOpacity style={HomeInformationStyle.alignItemsCenter}
                                  onPress={() => alert('ضمانت اصالت کالا')}>
                  <Text style={HomeInformationStyle.purchaseTitle}>ضمانت اصالت کالا</Text>
                  <AssetsComponent name={AssetFilesName.productGuarantee} resizeMode={"contain"} width={48}
                                   height={53}/>
                </TouchableOpacity>
                <TouchableOpacity style={HomeInformationStyle.alignItemsCenter}
                                  onPress={() => alert('خدمات پس از فروش')}>
                  <Text style={HomeInformationStyle.purchaseTitle}>خدمات پس از فروش</Text>
                  <AssetsComponent name={AssetFilesName.salesService} resizeMode={"contain"} width={54} height={53}/>
                </TouchableOpacity>
                <TouchableOpacity style={HomeInformationStyle.alignItemsCenter}
                                  onPress={() => alert('تحویل سریع و آسان')}>
                  <Text style={HomeInformationStyle.purchaseTitle}>تحویل سریع و آسان</Text>
                  <AssetsComponent name={AssetFilesName.fastDelivery} resizeMode={"contain"} width={65} height={53}/>
                </TouchableOpacity>
              </Row>
              <Divider style={{margin: 10}}/>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 17
                }}>توضیحات</Text>
                <AssetsComponent name={AssetFilesName.productArrowLeft} width={11} height={25}/>
              </Row>
              <Divider style={{margin: 10}}/>
              <View>
                <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                  <Text style={{
                    color: '#2e3192',
                    fontSize: 17
                  }}>مشخصات محصول</Text>
                  <AssetsComponent name={AssetFilesName.productArrowDown} width={25} height={11}/>
                </Row>
                <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                  <Text style={{
                    color: '#808080',
                    fontSize: 15,
                    fontFamily: typography.light,
                    marginRight: 20
                  }}>محل صید:</Text>
                  <Text style={{
                    color: '#808080',
                    fontSize: 15,
                    fontFamily: typography.light,
                    marginRight: 20
                  }}>جنوب ایران</Text>
                </Row>
                <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                  <Text style={{
                    color: '#808080',
                    fontSize: 15,
                    fontFamily: typography.light,
                    marginRight: 20
                  }}>محل صید:</Text>
                  <Text style={{
                    color: '#808080',
                    fontSize: 15,
                    fontFamily: typography.light,
                    marginRight: 20
                  }}>جنوب ایران</Text>
                </Row>
              </View>
              <Divider style={{margin: 10}}/>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{
                  color: '#2e3192',
                  fontSize: 17
                }}>ارزش غذایی</Text>
                <AssetsComponent name={AssetFilesName.productArrowLeft} width={11} height={25}/>
              </Row>
              <Divider style={{margin: 10}}/>
              <Row style={{justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
                <Button
                  buttonStyle={{
                    backgroundColor: '#2e3192',
                    flex: 1,
                    borderWidth: 0
                  }}
                  titleStyle={{
                    fontSize: 18,
                    fontFamily: typography.bold,
                    color: '#ffffff',
                  }}
                  title={"ثبت نظر"}/>
              </Row>
              <Divider style={{margin: 10}}/>
              <SimilarProducts/>

              <Divider style={{margin: 10}}/>
              <SimilarBlog/>
              <Breadcrumbs/>

            </View>


          </View>
        </View>
      </ScrollView>

      <Divider style={{margin: 10}}/>
      <Button
        linkTo={"basket"}
        buttonStyle={{
          marginHorizontal: 30,
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
        title={"افزودن به سبد خرید"}
      />
      <Divider style={{margin: 10}}/>
    </View>
  )
};
