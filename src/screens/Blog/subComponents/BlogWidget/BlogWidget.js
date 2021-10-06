import React from "react";
import BlogWidgetItem from "./BlogWidgetItem";
import {Row, Text} from "../../../../elements";
import {BlogDetailScreenStyle} from "../../BlogDetailScreen/BlogDetailScreen.style";

export const BlogWidget = (props) => {
  const {title, titleStyle, titleWrapper, blogItemProps} = props;

  return (
    <>
      <Row style={{...BlogDetailScreenStyle.titleWrapper, ...titleWrapper}}>
        <Text style={[BlogDetailScreenStyle.titleStyle, titleStyle]}>
          {title}
        </Text>
      </Row>
      <BlogWidgetItem {...blogItemProps}/>
      <BlogWidgetItem {...blogItemProps}/>

    </>
  )
}
