import {StyleSheet} from "react-native";
import {typography} from '../../../themes';

export const WelcomeScreenStyle = StyleSheet.create({
  container: {
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
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: '#19c978',
    fontSize: 18,
    marginVertical: 20
  },
  description: {
    fontFamily: typography.light,
    fontSize: 15,
    color: '#999999',
    marginVertical: 15
  },
  button: {
    flex: 1,
    backgroundColor: '#f27baa',
    height: 46,
    borderRadius: 23,
    borderWidth: 0,
    marginVertical: 30
  },
  buttonTitle: {
    color: '#2e3192',
    fontSize: 18
  }
});
