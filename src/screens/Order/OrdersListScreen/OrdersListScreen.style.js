import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const OrdersListScreenStyle = StyleSheet.create({
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
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#999999'
  },
  buttonTitle: {
    color: '#999999',
    fontSize: 12,
  },
  selectedButton: {
    flex: 1,
    backgroundColor: '#ff7bac',
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  selectedButtonTitle: {
    color: 'white',
    fontSize: 12,
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
    fontSize: 13,
    justifyContent: 'center'
  },
  showButton: {
    borderColor: '#2e3192',
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 15,
    borderWidth: 1
  },
  showButtonTitle: {
    color: '#2e3192',
  }
});
