import React from "react";
import {Image, Row, Text, TouchableOpacity, View} from "../../../../elements";
import {BlogWidgetStyle} from "./BlogWidget.style";

const BlogWidgetItem = (props) => {
  const {wrapperContentStyle, imageStyle} = props;

  return (
    <TouchableOpacity linkTo={"blog-detail"}>
      <Row style={{...BlogWidgetStyle.moreContentWrapper}}>
        <Image
          style={{...BlogWidgetStyle.imageMoreContent, ...imageStyle}}
          width={103}
          resizeMode={"cover"}
          height={82}
          source={{uri: "https://media.istockphoto.com/photos/fresh-raw-seabass-fish-on-black-stone-background-with-spices-herbs-picture-id1141194375?k=20&m=1141194375&s=612x612&w=0&h=jIcLQm--f41fhoyZlsngPA9Kvl7FWG3iWjrlhDtJig8="}}
        >
        </Image>
        <Row style={{...BlogWidgetStyle.textWrapperMoreContent, ...wrapperContentStyle}}>
          <View>
            <Text style={BlogWidgetStyle.textTitleMoreContent}>
              با تولید سادگی نامفهوم از صنعت چاپ
            </Text>
            <Text style={BlogWidgetStyle.textMoreContent}>
              12 اردیبهشت 1400
            </Text>
          </View>
        </Row>
      </Row>
    </TouchableOpacity>
  )
}
export default BlogWidgetItem;
