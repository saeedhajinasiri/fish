import {StyleSheet} from "react-native";
import {typography} from "../../../../themes";

export const BlogWidgetStyle = StyleSheet.create({
    moreContentWrapper: {
      flex: 1,
      height: 82,
      marginVertical: 5,
    },
    imageMoreContent: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    textWrapperMoreContent: {
      flex: 1,
      height: 82,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor: "#e6e6e6",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },
    textTitleMoreContent: {
      fontFamily: typography.primary,
      fontSize: 11,
      lineHeight: 18,
      color: "#666666",
    },
    textMoreContent: {
      fontFamily: typography.primary,
      fontSize: 9,
      lineHeight: 15,
      textAlign: "right",
      color: "#999999",
      marginVertical: 5,
    },
  }
)