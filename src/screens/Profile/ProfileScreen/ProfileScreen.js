import React from 'react';
import HeaderBanner from "../../../components/Header/HeaderBanner";
import {Button, Divider, Row, Text, View} from "../../../elements";
import {ProfileScreenStyle} from "./ProfileScreen.style";
import Link from './subComponents/Link';
import {ScrollView} from 'react-native';

const authData = [
  {
    title: 'اطلاعات حساب کاربری',
    icon: 'profileUser',
    linkTo: 'account'
  },
  {
    title: 'کیف پول',
    icon: 'profileWallet',
    linkTo: 'wallet'
  },
  {
    title: 'معرفی به دوستان',
    icon: 'profileIntroduce',
    linkTo: 'suggest'
  },
  {
    title: 'لیست علاقمندی ها',
    icon: 'heart'
  },
  {
    title: 'لیست سفارشات',
    icon: 'profileOrderList',
    linkTo: 'orders-list'
  },
  {
    title: 'پیگیری سفارش',
    icon: 'profileOrderTracking',
    linkTo: 'order-tracking'
  }
];
const data = [
  {
    title: 'درباره ما',
    icon: 'profileFish'
  },
  {
    title: 'تماس با ما',
    icon: 'profileContact',
    linkTo: 'contact'
  },
  {
    title: 'راهنمای خرید',
    icon: 'profileGuide'
  },
  {
    title: 'شرایط بازگشت کالا',
    icon: 'profileGuarantee'
  },
  {
    title: 'قوانین و مقررات',
    icon: 'profilePolicy'
  }
];

export const ProfileScreen = () => {
  return (
    <ScrollView style={ProfileScreenStyle.container}>
      <HeaderBanner
        isLoggedIn={true}
        containerStyle={{
          backgroundColor: '#e6e7e8'
        }}
        circleBannerStyle={{
          backgroundColor: '#e6e7e8'
        }}
        type={"banner"}
      />

      <View style={ProfileScreenStyle.wrapper}>
        <Row style={{marginVertical: 10}}>
          <View style={ProfileScreenStyle.profileBox}>
            <Text style={ProfileScreenStyle.description}>{`به جمع فیش دلیوریها بپیوندید\n و از تخفیفها زودتر از سایرین باخبر شوید.`}</Text>
            <Row style={{marginTop: 30}}>
              <Button
                linkTo={"login"}
                buttonStyle={ProfileScreenStyle.button}
                titleStyle={ProfileScreenStyle.buttonTitle}
                title={"ورود  /  ثبت نام"}/>
            </Row>
          </View>
        </Row>
        <Row style={ProfileScreenStyle.full}>
          <View style={ProfileScreenStyle.infoBox}>
            <Text style={ProfileScreenStyle.boxTitle}>موجودی</Text>
            <Text style={ProfileScreenStyle.boxTitle}>۰</Text>
          </View>
          <View style={{...ProfileScreenStyle.infoBox, marginHorizontal: 10}}>
            <Text style={ProfileScreenStyle.boxTitle}>سفارشات</Text>
            <Text style={ProfileScreenStyle.boxTitle}>۱۰</Text>
          </View>
          <View style={ProfileScreenStyle.infoBox}>
            <Text style={ProfileScreenStyle.boxTitle}>تحویل نشده</Text>
            <Text style={ProfileScreenStyle.boxTitle}>۱۲</Text>
          </View>
        </Row>
        <Row style={{marginVertical: 10}}>
          <View style={ProfileScreenStyle.linksBox}>
            {authData.map((item, index) => (
              <React.Fragment key={`authData${index}`}>
                <Link {...item}/>
                {index !== authData.length - 1 ? (<Divider style={ProfileScreenStyle.divider}/>) : null}
              </React.Fragment>
            ))}
          </View>
        </Row>
        <Row style={{marginVertical: 10}}>
          <View style={ProfileScreenStyle.linksBox}>
            <Link title={"خروج"} icon={'logout'}/>
          </View>
        </Row>
        <Row style={{marginVertical: 10}}>
          <View style={ProfileScreenStyle.linksBox}>
            {data.map((item, index) => (
              <React.Fragment key={`data${index}`}>
                <Link {...item}/>
                {index !== data.length - 1 ? (<Divider style={ProfileScreenStyle.divider}/>) : null}
              </React.Fragment>
            ))}
          </View>
        </Row>
      </View>

    </ScrollView>
  )
};
