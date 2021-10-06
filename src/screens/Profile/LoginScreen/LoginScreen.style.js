import {StyleSheet} from "react-native";

export const LoginScreenStyle = StyleSheet.create({
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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: '#2e3192',
    fontSize: 18
  },
  description: {
    fontSize: 13,
    color: '#999999'
  },
  mobileInput: {
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
  }
});
