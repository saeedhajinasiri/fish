import {Dimensions, StyleSheet} from "react-native";
const {height} = Dimensions.get('screen');

export const RegisterScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  fullHeight: {
    height: height - 200,
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
    fontSize: 15,
    lineHeight: 25,
    color: '#999999'
  },
  mobileInput: {
    flex: 1,
    marginHorizontal: 0,
  },
  button: {
    flex: 1,
    backgroundColor: '#f27baa',
    height: 46,
    borderRadius: 23,
    borderWidth: 0
  },
  buttonTitle: {
    color: '#2e3192',
    fontSize: 18
  },
  textInputContainer: {
    marginHorizontal: 0,
    marginVertical: 5,
    alignItems: 'center'
  },
});
