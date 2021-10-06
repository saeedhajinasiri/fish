import {Dimensions, StyleSheet} from "react-native";
import {typography} from '../../../themes';

const {height} = Dimensions.get('screen');

export const AccountScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e7e8'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  full: {
    flex: 1
  },
  titleBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  account: {color: '#2e3192', fontSize: 15},
  editButton: {flexDirection: 'row-reverse', alignItems: 'center', height: 40},
  editText: {color: '#ff7bac', fontSize: 15, paddingHorizontal: 5},
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 23,
    paddingHorizontal: 12,
    height: 45,
    borderColor: '#2e3192',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginVertical: 6
  },
  label: {
    fontFamily: typography.light,
    fontSize: 13,
    color: '#999999'
  },
  value: {
    fontFamily: typography.light,
    fontSize: 13,
    color: '#2e3192'
  }
});
