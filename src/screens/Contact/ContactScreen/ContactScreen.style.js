import {StyleSheet} from "react-native";

export const ContactScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  contactInfo: {
    backgroundColor: '#ffffff',
  },
  supportTitle: {
    color: '#2e3192',
    fontSize: 14
  },
  contactRow: {
    marginHorizontal: 30,
    height: 40,
    alignItems: 'flex-start',
    marginTop: 15,
  },
  contactTitle: {
    color: '#2e3192',
    fontSize: 14,
    marginHorizontal: 10,
    lineHeight: 28
  },
});
