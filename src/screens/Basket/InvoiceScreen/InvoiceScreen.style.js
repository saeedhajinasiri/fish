import {StyleSheet, Dimensions} from "react-native";
import {typography} from "../../../themes";

const {width} = Dimensions.get('screen');
const buttonWidth = (width - 80) / 2;

export const InvoiceScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
  },
  creditInfo: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  creditRow: {
    marginHorizontal: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  creditTitle: {
    color: '#2e3192',
    fontSize: 14,
    marginHorizontal: 10,
    lineHeight: 28
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  button: {
    flex: 1,
    backgroundColor: '#2e3192',
    height: 46,
    borderWidth: 0,
    borderRadius: 23,
    marginTop: 60,
    marginHorizontal: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 17,
    fontFamily: typography.bold
  },
  creditButton: {
    width: buttonWidth,
    height: 46,
    borderRadius: 23,
    borderColor: '#2e3192'
  },
  creditButtonTitle: {
    color: '#999999'
  },
  checkedButton: {
    backgroundColor: '#ff7bac',
    borderWidth: 0
  },
  checkedButtonTitle: {
    color: '#ffffff'
  },
  labelWrapper: {
    backgroundColor: '#2e3192',
    height: 47,
    width: 70,
    marginLeft: -1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#ffffff'
  },
  textInput: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginHorizontal: 0,
  },
  text: {
    fontFamily: typography.light,
  }
});
