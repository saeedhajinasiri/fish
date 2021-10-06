import React from 'react';
import {Dimensions, ScrollView} from "react-native";
import {Button, Divider, Image, ImageBackground, Row, Text, TouchableOpacity, View} from '../../../elements';
import {AssetFilesName} from "../../../assets/AssetFiles";
import AssetsComponent from "../../../assets";
import {BlogScreenStyle} from "./BlogScreen.style";
import {BlogWidget} from "../subComponents/BlogWidget";
import {typography} from "../../../themes";
import TextIcon from "../../../components/TextIcon";
import BlogOfferItem from "../subComponents/BlogOffers/BlogOfferItem";
import HomeInformationStyle from "../../Home/subComponents/HomeInformation/HomeInformation.style";
import Promotion from "../../../components/Promotion/Promotion";
import LinearGradient from "react-native-linear-gradient";

const {width} = Dimensions.get('window');

export const BlogScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
      }}
      >
        <ImageBackground
          style={{
            justifyContent: 'flex-end'
          }}
          borderRadius={14}
          width={width - 60}
          height={222}
          resizeMode={"cover"}
          source={{uri: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/10c38fa1-3b9d-48f3-a800-621cc560fa37.png"}}
        >
          <LinearGradient start={{x: 0, y: 0.3}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0)', 'rgba(10,10,10,255)']} style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: 222,
            borderRadius: 14
          }}>
            <View
              style={{
                width: 68,
                height: 27,
                backgroundColor: "#ff7bac",
                borderRadius: 15,
                marginVertical: 10,
                marginHorizontal: 5,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text style={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 15,
                color: "#2e3192"
              }}>
                دستور پخت
              </Text>

            </View>
            <View>
              <View style={{
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
                <TextIcon
                  textStyle={{
                    fontFamily: typography.primary,
                    fontSize: 20,
                    lineHeight: 20,
                    color: "#ffffff",
                    paddingTop: 10
                  }}
                  iconName={"recipe"}
                  iconWidth={15}
                  iconHeight={22}
                  title={'دستور پخت ماهی'}
                />
                <TextIcon
                  iconName={"calendar"}
                  iconWidth={13}
                  iconHeight={11}
                  title={'۶ مهرماه ۱۴۰۰'}
                />
                <TextIcon
                  iconName={"timer"}
                  iconWidth={13}
                  iconHeight={13}
                  title={'زمان مطالعه ۳ دقیقه'}
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: '#e6e6e6',
        marginVertical: 15,
      }}>
        <View>
          <Row style={{
            marginTop: 20,
            marginHorizontal: 30
            //backgroundColor: "red",
          }}>
            <Text style={{
              fontFamily: typography.bold,
              fontSize: 15,
              lineHeight: 20,
              color: "#2e3192",
              paddingTop: 5
            }}>
              اخبار فیش دلیوری
            </Text>
          </Row>
          <Promotion style={{paddingLeft: 7}} containerStyle={{marginVertical: 10}}>
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
            <BlogOfferItem
              style={{
                borderRadius: 10,
                transform: [{scale: -1}]
              }}
              width={120}
              height={92}
              textStyle={{
                fontFamily: typography.primary,
                fontSize: 10,
                lineHeight: 20,
                color: "#666666",
                marginTop: 5
              }}
              title={"با تولید سادگی نامفهوم"}
            />
          </Promotion>
        </View>
      </View>
      <Row style={{
        flex: 1,
        //backgroundColor: "red",
        alignItems: "center",
        paddingTop: 5,
        marginHorizontal: 30,
        marginVertical: 10,
      }}>
        <Text style={{
          fontFamily: typography.bold,
          fontSize: 15,
          lineHeight: 22,
          color: "#2e3192",

        }}>
          آخرین مطالب وبلاگ
        </Text>
      </Row>
      <View style={{
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
      }}
      >
        <ImageBackground
          borderRadius={14}
          width={width - 60}
          height={222}
          resizeMode={"cover"}
          source={{uri: "https://cdn.zeplin.io/6134b0d0fa42962e788d68ab/assets/10c38fa1-3b9d-48f3-a800-621cc560fa37.png"}}
        />
      </View>
      <View style={{
        marginHorizontal: 30, flex: 1, backgroundColor: '#f2f2f2',
        borderRadius: 10, marginVertical: 10, paddingHorizontal: 10, paddingTop: 10
      }}>
        <Text style={HomeInformationStyle.boxTitle}>خواص ماهی سفید</Text>
        <Text style={[HomeInformationStyle.boxContent, {fontFamily: typography.primary}]}>
          با معرفی فیش دلیوری به دوستان خود، در سفارش بعدی 20 % تخفیف بگیرید. دوستانتان هم در اولین سفارش، 20 % تخفیف
          میگیرند!
        </Text>
        <Button
          buttonStyle={{
            width: 90,
            height: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            marginHorizontal: 15,
            paddingHorizontal: 5,
            paddingTop: 5,
            borderRadius: 15,
            borderColor: '#ff7bac',
            borderWidth: 2,
          }}
          icon={'arrowLeftBlue'}
          iconStyle={HomeInformationStyle.boxButtonIcon}
          titleStyle={[HomeInformationStyle.boxButtonTitle, {
            fontFamily: typography.primary,
            fontSize: 10,
            lineHeight: 11,
            color: "#2e3192"
          }]}
          title={'ادامه مطالب'}/>
      </View>
      <View style={{marginHorizontal: 30}}>
        <BlogWidget
          title={'اطلاعات سوپر مارکتی'}
          titleStyle={[BlogScreenStyle.blogWidgetTitle, {marginHorizontal: 15}]}
          titleWrapper={BlogScreenStyle.blogWidgetTitleWrapper}
          blogItemProps={{
            wrapperContentStyle: {
              backgroundColor: "transparent"
            },
            imageStyle: {
              borderRadius: 10
            }
          }}
        />
        <BlogWidget
          title={'نکات و ترفندها'}
          titleStyle={BlogScreenStyle.blogWidgetTitle}
          titleWrapper={BlogScreenStyle.blogWidgetTitleWrapper}
          blogItemProps={{
            wrapperContentStyle: {
              backgroundColor: "transparent"
            },
            imageStyle: {
              borderRadius: 10
            }
          }}
        />
        <View style={BlogScreenStyle.viewWrapper}>
          <Text style={BlogScreenStyle.rectangleText}>
            اولین سفارش خود را از فیش دلویری را با تخفیف ویژه ثبت کنید
          </Text>
          <TouchableOpacity style={BlogScreenStyle.rectangleTouchable}>
            <Text style={BlogScreenStyle.rectangleTouchableText}>
              ثبت و مرحله بعد
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
