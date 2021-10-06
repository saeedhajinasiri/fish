import React from "react";
import {Text, TouchableOpacity, Image} from '../../../../elements'
import BlogOfferItemStyle from "./BlogOfferItem.style";

const BlogOfferItem = (props) => {
  const {style, title, imageUrl, width, height,textStyle, ...rest} = props;
  return (
    <TouchableOpacity
      linkTo={"blog-detail"}
      style={[BlogOfferItemStyle.wrapper, {width: width}, style]} {...rest}>
      <Image
        style={BlogOfferItemStyle.image}
        width={width}
        height={height}
        borderRadius={10}
        source={{uri: imageUrl}}
        resizeMode={"cover"}
      />
      <Text style={[BlogOfferItemStyle.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
};

export default BlogOfferItem;

BlogOfferItem.defaultProps = {
  title: 'لورم ایپسـوم متن ساخـتگی',
  imageUrl: 'https://s3.envato.com/files/323078234/front%20view%20(fresh%20fish)%20with%20lemon%20slices%20on%20wooden%20background%20food%20seafood%20dish%20ocean.jpg',
  width: 100,
  height: 100,
};
