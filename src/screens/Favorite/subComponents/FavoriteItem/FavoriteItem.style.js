import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');
const boxWidth = (width - 90) / 2;

export const FavoriteItemStyle = StyleSheet.create({
    container: {
      marginHorizontal: 5,
      marginVertical: 6
    },
    ImageBackgroundWrapper: {
      width: boxWidth,
    },
    ImageBackground: {
      justifyContent: "space-between"
    },
    TextStyle: {
      fontSize: 12,
      lineHeight: 25,
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff",
      alignContent: "center"
    }
  }
)
