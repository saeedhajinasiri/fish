import {StyleSheet} from "react-native";
import {typography} from "../../../themes";

export const SuggestScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactInfo: {
    backgroundColor: '#ffffff',
    marginHorizontal: 30
  },
  supportTitle: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 60
  },
  icon: {
    marginHorizontal: 12,
    width: 32,
    height: 32
  },
  button: {
    backgroundColor: '#ff7bac',
    height: 46,
    borderWidth: 0,
    borderRadius: 23
  },
  buttonTitle: {
    color: 'white',
    fontSize: 17,
    fontFamily: typography.bold
  },
  social: {
    backgroundColor: '#2e3192',
    height: 46,
    borderRadius: 23,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
