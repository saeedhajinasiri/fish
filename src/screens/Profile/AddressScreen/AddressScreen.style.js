import {Dimensions, StyleSheet} from "react-native";
import {typography} from "../../../themes";
const {height} = Dimensions.get('screen');

export const AddressScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  fullHeight: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  loginBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  description: {
    marginTop: 25,
    fontSize: 12,
    lineHeight: 25,
    color: '#2e3192',
    fontFamily: typography.bold,
    alignSelf: 'flex-end'
  },
  mobileInput: {
    flex: 1,
    marginHorizontal: 0,
  },
  button: {
    flex: 1,
    backgroundColor: '#19c978',
    height: 46,
    borderRadius: 23,
    borderWidth: 0,
    marginHorizontal: 30,
    marginVertical: 10
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18
  },
  textInputContainer: {
    marginHorizontal: 0,
    marginVertical: 5,
    alignItems: 'center'
  },
});
