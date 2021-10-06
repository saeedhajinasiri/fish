import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const BlogDetailScreenStyle = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
      paddingHorizontal: 30,
    },
    imageWrapper: {
      marginVertical: 16,
      alignItems: "center",
    },
    image: {
      borderRadius: 10,
    },
    topicWrapper: {
      flex: 1,
      height: 12,
      justifyContent: "space-between",
      marginVertical: 5,
      alignItems: "center",
    },
    topic: {
      fontFamily: typography.primary,
      fontSize: 10,
      color: "#2e3192",
    },
    concept: {
      fontFamily: typography.primary,
      fontSize: 10,
      paddingHorizontal: 3,
      color: "#ff7bac",
    },
    date: {
      fontFamily: typography.primary,
      fontSize: 10,
      color: "#808080",
    },
    directoryWrapper: {
      flexDirection: "row-reverse",
      flexGrow: 1,
      height: 44,
      backgroundColor: "#2e3192",
      marginVertical: 14,
      borderRadius: 21,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      alignItems: "center",
    },
    directoryText: {
      fontFamily: typography.primary,
      fontSize: 12,
      lineHeight: 44,
      color: "#ffffff",
      paddingRight: 118,
    },
    topicTextWrapper: {
      marginVertical: 7,
    },
    description: {
      flex: 1,
      fontFamily: typography.light,
      fontSize: 12,
      lineHeight: 20,
      color: "#808080",
    },
    subjectWrapper: {
      flex: 1,
      marginVertical: 7,
      backgroundColor: "#e6e6e6",
      height: 31,
      alignItems: "center",
    },
    subjectText: {
      fontFamily: typography.primary,
      fontSize: 12,
      color: "#2e3192",
      paddingHorizontal: 20,
    },
    subjectDescriptionWrapper: {
      marginVertical: 7,
    },
    subjectDescription: {
      flex: 1,
      fontFamily: typography.primary,
      fontSize: 10,
      lineHeight: 20,
      color: "#808080",
    },
    rankWrapper: {
      height: 20,
      flex: 1,
      alignItems: "center",
    },
    rankTextWrapper: {
      marginHorizontal: 10,
      alignItems: "center",
      paddingTop: 3,
    },
    textRank: {
      fontFamily: typography.primary,
      fontSize: 13,
      lineHeight: 26,
      color: "#2e3192",
    },
    numberRank: {
      paddingRight: 5,
      fontFamily: typography.primary,
      fontSize: 13,
      lineHeight: 26,
      color: "#2e3192",
    },
    linkWrapper: {
      height: 20,
      flex: 1,
      marginVertical: 10,
      alignItems: "center",
    },
    textLinkWrapper: {
      paddingTop: 3,
    },
    textLink: {
      fontFamily: typography.primary,
      fontSize: 13,
      lineHeight: 26,
      color: "#2e3192",
    },
    linkIconWrapper: {
      marginHorizontal: 10,
      alignItems: "center",
    },
    linkIcon: {
      marginHorizontal: 5,
    },
    divider: {
      backgroundColor: '#999',
    },
    titleWrapper: {
      flex: 1,
      height: 20,
      marginVertical: 30,
    },
    titleStyle: {
      fontFamily: typography.primary,
      fontSize: 12,
      lineHeight: 23,
      color: "#2e3192",
    },
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
    blogWidgetWrapper: {
      marginBottom: 11,
    },
    blogWidgetTitle: {
      marginHorizontal: 16,
      fontSize: 15,
      lineHeight: 26,
    },
    blogWidgetTitleWrapper: {
      backgroundColor: "#e6e6e6",
      height: 44,
      borderRadius: 22,
      alignItems: "center",
      marginBottom: 6,
    },
    viewWrapper: {
      backgroundColor: "#2e3192",
      height: 124,
      flex: 1,
      marginVertical: 23,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center"
    },
    rectangleText: {
      fontFamily: typography.primary,
      fontSize: 10,
      lineHeight: 17,
      color: "#ffffff",
      marginVertical: 5,
    },
    rectangleTouchable: {
      backgroundColor: "#ff7bac",
      width: 266,
      height: 36,
      borderRadius: 18,
      marginVertical: 5,
      alignItems: "center",
      justifyContent: "center"
    },
    rectangleTouchableText: {
      fontFamily: typography.primary,
      fontSize: 14,
      lineHeight: 24,
      color: "#2e3192",
    }
  }
)