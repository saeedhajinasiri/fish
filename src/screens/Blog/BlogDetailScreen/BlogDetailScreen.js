import React, {useState} from 'react';
import {Dimensions, ScrollView} from "react-native";
import {Button, Divider, Image, Row, Text, TextInput, TouchableOpacity, View} from '../../../elements';
import {AssetFilesName} from "../../../assets/AssetFiles";
import AssetsComponent from "../../../assets";
import {typography} from "../../../themes";
import {BlogDetailScreenStyle} from "./BlogDetailScreen.style";
import {BlogWidget} from "../subComponents/BlogWidget";
import {RegisterScreenStyle} from "../../Profile/RegisterScreen/RegisterScreen.style";
import Modal from "../../../elements/Modal";
import TextIcon from "../../../components/TextIcon";
import CommentItem from "../../../components/CommentItem";


const {width} = Dimensions.get('window');
export const BlogDetailScreen = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  return (
    <View>
      <ScrollView style={BlogDetailScreenStyle.container}>
        <View style={BlogDetailScreenStyle.imageWrapper}>
          <Image
            style={BlogDetailScreenStyle.image}
            width={width - 60}
            resizeMode={"cover"}
            height={224}
            source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
          >
          </Image>
        </View>
        <Row style={BlogDetailScreenStyle.topicWrapper}>
          <Row>
            <Text style={BlogDetailScreenStyle.topic}>
              موضوع:
            </Text>
            <Text style={BlogDetailScreenStyle.concept}>
              سلامت
            </Text>
          </Row>
          <Text style={BlogDetailScreenStyle.date}>
            ۱۵ اردیبهشت ۱۴۰۰
          </Text>
        </Row>
        {/* <Row>
        <TouchableOpacity style={BlogDetailScreenStyle.directoryWrapper}>
          <Text style={BlogDetailScreenStyle.directoryText}>
            فهرست عناوین
          </Text>
          <AssetsComponent
            name={AssetFilesName.arrowDown}
            resizeMode={"contain"}
            width={14}
            height={7}
          />
        </TouchableOpacity>
      </Row>*/}
        <View style={BlogDetailScreenStyle.topicTextWrapper}>
          <Text style={BlogDetailScreenStyle.description}>
            لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ است لورم ایپسـوم متن ساخـتگی با تولید سادگی
            نامفهوم از صنعت چاپ است صنعت چاپ است لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ است
          </Text>
        </View>
        <Row style={BlogDetailScreenStyle.subjectWrapper}>
          <AssetsComponent
            name={AssetFilesName.rectangle}
            resizeMode={"contain"}
            width={5}
            height={31}
          />
          <Text style={BlogDetailScreenStyle.subjectText}>
            خواص قزل آلا چیست؟
          </Text>
        </Row>
        <View style={BlogDetailScreenStyle.subjectDescriptionWrapper}>
          <Text style={BlogDetailScreenStyle.subjectDescription}>
            لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ است لورم ایپسـوم متن ساخـتگی با تولید سادگی
            نامفهوم از صنعت چاپ است صنعت چاپ است لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ است صنعت
            چاپ
            است لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ است صنعت چاپ است لورم ایپسـوم متن ساخـتگی با
            تولید سادگی نامفهوم از صنعت چاپ است صنعت چاپ است لورم ایپسـوم متن ساخـتگی با تولید سادگی نامفهوم از صنعت چاپ
            است
          </Text>
        </View>
        <Row style={BlogDetailScreenStyle.rankWrapper}>
          <Row>
            <AssetsComponent
              name={AssetFilesName.star}
              resizeMode={"contain"}
              width={13}
              height={11}
            />
            <AssetsComponent
              name={AssetFilesName.star}
              resizeMode={"contain"}
              width={13}
              height={11}
            />
            <AssetsComponent
              name={AssetFilesName.pinkStar}
              resizeMode={"contain"}
              width={13}
              height={11}
            />
            <AssetsComponent
              name={AssetFilesName.pinkStar}
              resizeMode={"contain"}
              width={13}
              height={11}
            />
            <AssetsComponent
              name={AssetFilesName.pinkStar}
              resizeMode={"contain"}
              width={13}
              height={11}
            />
          </Row>
          <Row
            style={BlogDetailScreenStyle.rankTextWrapper}>
            <Text style={BlogDetailScreenStyle.textRank}>
              امتیاز
            </Text>
            <Text style={BlogDetailScreenStyle.numberRank}>
              ۵/۴
            </Text>
          </Row>
        </Row>
        <Row style={BlogDetailScreenStyle.linkWrapper}>
          <Row style={BlogDetailScreenStyle.textLinkWrapper}>
            <Text style={BlogDetailScreenStyle.textLink}>
              ۱۵۶
            </Text>
          </Row>
          <Row style={BlogDetailScreenStyle.linkIconWrapper}>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.grayHeart}
                resizeMode={"contain"}
                width={11}
                height={11}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.rectangle}
                resizeMode={"contain"}
                width={2}
                height={11}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.envelop}
                resizeMode={"contain"}
                width={11}
                height={9}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.grayTwitter}
                resizeMode={"contain"}
                width={11}
                height={9}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.grayTelegram}
                resizeMode={"contain"}
                width={9}
                height={9}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AssetsComponent
                style={BlogDetailScreenStyle.linkIcon}
                name={AssetFilesName.grayShare}
                resizeMode={"contain"}
                width={12}
                height={11}
              />
            </TouchableOpacity>
          </Row>
        </Row>
        <Divider style={BlogDetailScreenStyle.divider}/>
        <BlogWidget
          title={'شاید این مطلب را دوست داشته باشید:'}
          titleWrapper={BlogDetailScreenStyle.blogWidgetWrapper}
        />

        <Row style={{marginVertical: 8}}>
          <Button
            onPress={toggleFilterModal}
            buttonStyle={RegisterScreenStyle.button}
            titleStyle={[RegisterScreenStyle.buttonTitle, {color: "#ffffff"}]}
            title={"ارسال دیدگاه"}
          />
        </Row>
        <BlogWidget
          title={'اطلاعات سوپر مارکتی'}
          titleStyle={BlogDetailScreenStyle.blogWidgetTitle}
          titleWrapper={BlogDetailScreenStyle.blogWidgetTitleWrapper}
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
          titleStyle={BlogDetailScreenStyle.blogWidgetTitle}
          titleWrapper={BlogDetailScreenStyle.blogWidgetTitleWrapper}
          blogItemProps={{
            wrapperContentStyle: {
              backgroundColor: "transparent"
            },
            imageStyle: {
              borderRadius: 10
            }
          }}
        />
        <View style={BlogDetailScreenStyle.viewWrapper}>
          <Text style={BlogDetailScreenStyle.rectangleText}>
            اولین سفارش خود را از فیش دلویری را با تخفیف ویژه ثبت کنید
          </Text>
          <TouchableOpacity style={BlogDetailScreenStyle.rectangleTouchable}>
            <Text style={BlogDetailScreenStyle.rectangleTouchableText}>
              ثبت و مرحله بعد
            </Text>
          </TouchableOpacity>
        </View>
        <CommentItem title={'ایران'} dateTime={'۱۱ مهر ۱۴۰۰'} comment={'دم شما گرم'}/>
      </ScrollView>

      <Modal
        title={'دیدگاه ها'}
        full={true}
        hasRightComponent={false}
        toggleModal={() => toggleFilterModal()}
        isVisible={filterModalVisible}>
        <ScrollView>
          <Row style={{
            marginVertical: 15,
            marginHorizontal: 25,
          }}>
            <Text style={{
              fontFamily: typography.bold,
              fontSize: 10,
              lineHeight: 15,
              color: "#2e3192"
            }}>
              ارسال دیدگاه
            </Text>
          </Row>
          <TextInput
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              marginBottom: 5,
            }}
            placeholder={"نام و نام خانوادگی"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
            }}
          />
          <TextInput
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              marginBottom: 5,
            }}
            placeholder={"ایمیل"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
            }}
          />
          <TextInput
            multiline={true}
            containerStyle={{
              flex: 0,
              borderWidth: 0,
              backgroundColor: "#e6e6e6",
              marginVertical: 0,
              borderRadius: 10,
              height: 100,
            }}
            placeholder={"متن دیدگاه"}
            style={{
              fontFamily: typography.light,
              fontSize: 10,
              lineHeight: 9,
              color: "#666666",
              paddingHorizontal: 16,
              marginHorizontal: 0,
              paddingTop: 0,
            }}
          />
          <Row style={{marginVertical: 8, marginHorizontal: 14,}}>
            <Button
              onPress={toggleFilterModal}
              buttonStyle={RegisterScreenStyle.button}
              titleStyle={[RegisterScreenStyle.buttonTitle, {color: "#ffffff"}]}
              title={"ارسال دیدگاه"}
            />
          </Row>
          <CommentItem title={'ایران'} dateTime={'۱۱ مهر ۱۴۰۰'} comment={'دم شما گرم'}/>
          <CommentItem isReply={true} title={'تهران'} dateTime={'۱۲ اردیبهشت ۱۴۰۰'} comment={'ممنون از پیگیری'}/>
          <CommentItem title={'کرج'} dateTime={'۱۰ مهر ۱۴۰۰'} comment={'محصولات عالی هستند'}/>
          <CommentItem isReply={true} title={'محمدرضا اشتری سیستانی بروجردی'} dateTime={'۱۰ شهریور ۱۴۰۰'}
                       comment={'محصولات بسیار تازه هستند '}/>
        </ScrollView>
      </Modal>
    </View>
  )
};
