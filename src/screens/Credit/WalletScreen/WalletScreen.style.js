import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const WalletScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e7e8'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  walletInfo: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#e6e7e8',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#ff7bac',
    height: 46,
    borderWidth: 0,
    borderRadius: 23,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 17,
    fontFamily: typography.bold
  },
  credit: {
    marginHorizontal: 20,
    color: '#2e3192',
    fontSize: 15
  },
  headerTitleBox: {
    marginVertical: 5,
    backgroundColor: '#2e3192',
    height: 46,
    borderRadius: 23,
    flex: 1,
    alignItems: 'center'
  },
  headerInfo: {
    flex: 1,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 13
  },
  titleBox: {
    marginVertical: 5,
    backgroundColor: '#ffffff',
    height: 46,
    borderRadius: 23,
    flex: 1,
    alignItems: 'center'
  },
  info: {
    flex: 1,
    textAlign: 'center',
    color: '#2e3192',
    fontSize: 13
  }
});
