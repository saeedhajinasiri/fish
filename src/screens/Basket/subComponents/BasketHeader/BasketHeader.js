import {BasketScreenStyle} from "../../BasketScreen/BasketScreen.style";
import Row from "../../../../elements/Row";
import TouchableOpacity from "../../../../elements/TouchableOpacity";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import Text from "../../../../elements/Text";
import React from "react";
import View from "../../../../elements/View";

export const BasketHeader = ({setBasketStep, basketStep}) => {
  return (
    <View style={BasketScreenStyle.wrapper}>
      <Row style={BasketScreenStyle.titleBox}>
        <Row style={BasketScreenStyle.justifyContentBetween}>
          <TouchableOpacity
            onPress={() => setBasketStep('second')}
            style={[BasketScreenStyle.tab, basketStep === 'second' ? BasketScreenStyle.currentTab : {}]}>
            <AssetsComponent
              name={AssetFilesName.basketIcon}
              width={31}
              height={27}
            />
            <Text style={BasketScreenStyle.tabTitle}>سبد خرید</Text>
          </TouchableOpacity>
        </Row>
        <AssetsComponent
          name={AssetFilesName.basketArrowRight}
          width={4}
          height={8}
        />
        <Row style={BasketScreenStyle.justifyContentBetween}>
          <TouchableOpacity
            onPress={() => setBasketStep('third')}
            style={[BasketScreenStyle.tab, basketStep === 'third' ? BasketScreenStyle.currentTab : {}]}>
            <AssetsComponent
              name={AssetFilesName.basketLocation}
              width={31}
              height={27}
            />
            <Text style={BasketScreenStyle.tabTitle}>اطلاعات ارسال</Text>
          </TouchableOpacity>
        </Row>
        <AssetsComponent
          name={AssetFilesName.basketArrowRight}
          width={4}
          height={8}
        />
        <Row style={BasketScreenStyle.justifyContentBetween}>
          <TouchableOpacity
            onPress={() => setBasketStep('fourth')}
            style={[BasketScreenStyle.tab, basketStep === 'fourth' ? BasketScreenStyle.currentTab : {}]}>
            <AssetsComponent
              name={AssetFilesName.basketPayment}
              width={31}
              height={27}
            />
            <Text style={BasketScreenStyle.tabTitle}>اطلاعات پرداخت</Text>
          </TouchableOpacity>
        </Row>
      </Row>
      <View style={BasketScreenStyle.basketInfoContainer}>
        <Row style={BasketScreenStyle.basketInfo}>
          <Text style={BasketScreenStyle.basketInfoTitle}>مبلغ کل سبد خرید:</Text>
          <Text style={BasketScreenStyle.basketInfoValue}>۲.۵۰۰.۰۰۰ ریال</Text>
        </Row>
        <Row style={BasketScreenStyle.basketInfo}>
          <Text style={BasketScreenStyle.basketInfoTitle}>هزینه ارسال</Text>
          <Text style={BasketScreenStyle.basketInfoValue}>رایگان</Text>
        </Row>
        <Row style={BasketScreenStyle.basketInfo}>
          <Text style={BasketScreenStyle.basketInfoTitle}>مبلغ قابل پرداخت:</Text>
          <Text style={BasketScreenStyle.basketInfoValue}>۲.۵۰۰.۰۰۰ ریال</Text>
        </Row>
      </View>
    </View>
  )
};
