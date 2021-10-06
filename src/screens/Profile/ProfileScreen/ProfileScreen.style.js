import {Dimensions, StyleSheet} from "react-native";

const {height} = Dimensions.get('screen');

export const ProfileScreenStyle = StyleSheet.create({
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
  profileBox: {
    flex: 1,
    borderRadius: 13,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 28,
    color: '#999999'
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
  linksBox: {
    flex: 1,
    borderRadius: 13,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  links: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 55,
    paddingHorizontal: 15,
    flexDirection: 'row-reverse',
    flex: 1,
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  },
  linkTitle: {
    fontSize: 16,
    color: '#666666',
    paddingHorizontal: 10
  },
  arrow: {
    width: 8,
    height: 15
  },
  divider: {
    marginHorizontal: 0
  },
  full: {
    flex: 1
  },
  boxTitle: {
    fontSize: 15,
    color: '#999999'
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 10,
    height: 90,
    backgroundColor: '#ffffff'
  }
});
