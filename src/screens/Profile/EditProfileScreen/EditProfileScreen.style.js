import {StyleSheet} from "react-native";
import {typography} from '../../../themes';

export const EditProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e7e8',
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
  textInput: {
    fontFamily: typography.light,
    fontSize: 13,
    color: '#2e3192'
  },
  textInputContainer: {
    marginHorizontal: 0
  },
  titleBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  account: {
    color: '#2e3192',
    fontSize: 15
  },
  editButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 40
  },
  editText: {
    color: '#ff7bac',
    fontSize: 15,
    paddingHorizontal: 5
  },
  sendingInfo: {
    fontFamily: typography.bold,
    marginTop: 20,
    color: '#ff7bac',
    fontSize: 15,
  },
});
