import React, {useState} from "react";
import {BasketItemStyle} from "./BasketItem.style";
import {Image, Row, Text, TouchableOpacity, View} from "../../../../elements";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import AssetsComponent from "../../../../assets";
import Divider from "../../../../elements/Divider/Divider";
import Button from "../../../../elements/Button";
import Modal from "../../../../elements/Modal";
import {typography} from "../../../../themes";

export const BasketItem = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible);
  };

  return (
    <>
      <Row style={BasketItemStyle.wrapper}>
        <View>
          <Image
            style={BasketItemStyle.image}
            width={150}
            resizeMode={"cover"}
            height={120}
            source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
          />
          <TouchableOpacity
            style={BasketItemStyle.deleteButton}
            onPress={() => toggleDeleteModal()}>
            <AssetsComponent
              name={AssetFilesName.basketClose}
              width={10}
              height={10}
            />
          </TouchableOpacity>
        </View>
        <View style={BasketItemStyle.infoWrapper}>
          <Text style={BasketItemStyle.title}>ماهی قزل آلا</Text>
          <Row style={BasketItemStyle.justifyContentBetween}>
            <Text style={BasketItemStyle.blueTitle}>فیله پاک شده</Text>
            <Text style={BasketItemStyle.greenValue}>۲۵۰.۰۰۰ ت</Text>
          </Row>
          <Row style={BasketItemStyle.justifyContentBetween}>
            <TouchableOpacity
              style={BasketItemStyle.basketButton}
              onPress={() => alert('basket')}>
              <AssetsComponent
                name={AssetFilesName.basketBasketIcon}
                width={17}
                height={17}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={BasketItemStyle.trashButton}
              onPress={() => toggleDeleteModal()}>
              <AssetsComponent
                name={AssetFilesName.basketTrash}
                width={15}
                height={16}
              />
            </TouchableOpacity>
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
      <View style={BasketItemStyle.infoContainer}>
        <Row style={[BasketItemStyle.justifyContentBetween, BasketItemStyle.height30]}>
          <Row style={BasketItemStyle.full}>
            <Text style={BasketItemStyle.blackTitle}>قیمت واحد: </Text>
            <Text style={BasketItemStyle.grayValue}>۲.۵۰۰.۰۰۰ ت</Text>
          </Row>
          <Row>
            <Text style={BasketItemStyle.blackTitle}>تعداد: </Text>
            <Button title={"+"} style={BasketItemStyle.countButton}/>
            <Text style={BasketItemStyle.grayValue}>۲</Text>
            <Button title={"-"} style={BasketItemStyle.countButton}/>
          </Row>
        </Row>
        <Row style={BasketItemStyle.height30}>
          <Text style={BasketItemStyle.blackTitle}>تخفیف: </Text>
          <Text style={BasketItemStyle.discountValue}>۵۰.۰۰۰ ت</Text>
        </Row>
        <Row style={BasketItemStyle.finalPriceWrapper}>
          <Text style={BasketItemStyle.blackTitle}>قیمت نهایی: </Text>
          <Text style={BasketItemStyle.finalPrice}>۲۴۵.۰۰۰ ت</Text>
        </Row>
      </View>
      <Divider style={BasketItemStyle.divider}/>
      <Modal
        wrapperContentStyle={{flex: 0.4}}
        toggleModal={() => toggleDeleteModal()}
        isVisible={deleteModalVisible}>
        <View style={BasketItemStyle.deleteModal}>
          <View style={BasketItemStyle.deleteModalWrapper}>
            <Text style={BasketItemStyle.deleteProduct}>حذف کالا</Text>
            <Text style={BasketItemStyle.areYouSure}>آیا مطمئنید؟</Text>
            <Row>
              <Button titleStyle={{fontSize: 16, fontFamily: typography.bold, color: '#f27baa'}}
                      buttonStyle={{marginHorizontal: 15, width: 120}} title="حذف کالا" onPress={toggleDeleteModal}/>
              <Button titleStyle={{fontSize: 16, fontFamily: typography.bold, color: '#808080'}}
                      buttonStyle={{marginHorizontal: 15, width: 120}} title="بیخیال" onPress={toggleDeleteModal}/>
            </Row>
          </View>
          <View>
            <Divider/>
            <Button
              titleStyle={{
                fontSize: 16,
                color: '#ffffff'
              }}
              buttonStyle={{
                backgroundColor: '#19c978',
                marginVertical: 8,
                borderWidth: 0,
                marginHorizontal: 20,
              }}
              title={"افزودن به لیست علاقمندی"}/>
            <Divider/>
          </View>
        </View>
      </Modal>
    </>
  )
};
