import React, {useState} from "react";
import {AddressItemStyle} from "./AddressItem.style";
import {Image, Row, Text, TouchableOpacity, View} from "../../../../elements";
import {AssetFilesName} from "../../../../assets/AssetFiles";
import AssetsComponent from "../../../../assets";
import Divider from "../../../../elements/Divider/Divider";
import Button from "../../../../elements/Button";
import Modal from "../../../../elements/Modal";
import {typography} from "../../../../themes";
import TextIcon from "../../../../components/TextIcon/TextIcon";

export const AddressItem = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible);
  };

  return (
    <>
      <View style={AddressItemStyle.wrapper}>
        <Row style={{
          justifyContent: 'space-between'
        }}>
          <AssetsComponent name={AssetFilesName.radioButton} width={13} height={13}/>

          <Row>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20
              }}
              linkTo={"address"}>
              <AssetsComponent
                name={AssetFilesName.edit}
                width={10}
                height={10}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20
              }}
              onPress={() => toggleDeleteModal()}>
              <AssetsComponent
                name={AssetFilesName.basketTrash}
                width={10}
                height={10}
              />
            </TouchableOpacity>
          </Row>
        </Row>
        <Divider/>
        <View style={{marginTop: 5}}>
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent',
              marginVertical: 5
            }}
            iconName={"addressUser"}
            iconWidth={25}
            iconHeight={35}
            textStyle={{
              color: '#2e3192',
              fontFamily: typography.light
            }}
            title={'ایران'}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent',
              marginVertical: 5
            }}
            iconName={"addressLocation"}
            iconWidth={25}
            iconHeight={35}
            textStyle={{
              color: '#2e3192',
              fontFamily: typography.light
            }}
            title={'ایرانشهر'}
          />
          <TextIcon
            containerStyle={{
              backgroundColor: 'transparent',
              marginVertical: 5
            }}
            iconName={"addressTel"}
            iconWidth={25}
            iconHeight={35}
            textStyle={{
              color: '#2e3192',
              fontFamily: typography.light
            }}
            title={'0936363636'}
          />
        </View>
      </View>
      <Modal
        wrapperContentStyle={{flex: 0.3}}
        toggleModal={() => toggleDeleteModal()}
        isVisible={deleteModalVisible}>
        <View style={AddressItemStyle.deleteModal}>
          <View style={AddressItemStyle.deleteModalWrapper}>
            <Text style={AddressItemStyle.deleteProduct}>حذف آدرس</Text>
            <Text style={AddressItemStyle.areYouSure}>آیا مطمئنید؟</Text>
            <Row>
              <Button titleStyle={{fontSize: 16, fontFamily: typography.bold, color: '#f27baa'}}
                      buttonStyle={{marginHorizontal: 15, width: 120}} title="حذف آدرس" onPress={toggleDeleteModal}/>
              <Button titleStyle={{fontSize: 16, fontFamily: typography.bold, color: '#808080'}}
                      buttonStyle={{marginHorizontal: 15, width: 120}} title="بیخیال" onPress={toggleDeleteModal}/>
            </Row>
          </View>
        </View>
      </Modal>
    </>
  )
};
