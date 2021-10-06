import {StyleSheet} from "react-native";
import {typography} from '../../../themes';

export const OrderTrackingScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
    paddingBottom: 30,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  full: {
    flex: 1
  },
  title: {
    color: '#666666',
    fontSize: 15,
    marginVertical: 30,
    lineHeight: 28
  },
  titleBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    fontFamily: typography.light,
    fontSize: 13,
    color: '#2e3192'
  },
  textInputContainer: {
    marginHorizontal: 0
  },
  button: {
    marginVertical: 40,
    height: 46,
    backgroundColor: '#19c978',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18
  }
});
