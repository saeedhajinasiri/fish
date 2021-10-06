import {Dimensions, StyleSheet} from "react-native";
import {typography} from '../../../themes';

const {width} = Dimensions.get('screen');

export const BasketScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  emptyWrapper: {
    paddingBottom: 30,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
    // flex: 1
  },
  full: {
    flex: 1
  },
  emptyTitle: {
    fontFamily: typography.light,
    color: '#666666',
    fontSize: 15,
    marginVertical: 10,
    lineHeight: 28
  },
  emptyTitleBox: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingBottom: 10,
    flex: 1,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  titleBox: {
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 10,
    height: 46,
    backgroundColor: '#f27baa',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0
  },
  buttonTitle: {
    color: '#2e3192',
    fontSize: 18
  },
  tab: {
    width: 90,
    height: 80,
    backgroundColor: '#e6e6e6',
    borderColor: '#b3b3b3',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  currentTab: {
    backgroundColor: 'white',
  },
  tabTitle: {
    color: '#2e3192',
    fontSize: 10
  },
  basketInfoContainer: {
    width: '100%',
    paddingHorizontal: 15
  },
  basketInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 3
  },
  basketInfoTitle: {
    fontSize: 13,
    fontFamily: typography.light,
    color: '#666666'
  },
  basketInfoValue: {
    fontSize: 13,
    fontFamily: typography.bold,
    color: '#19c978'
  },
  discountTitle: {
    fontSize: 16,
    color: '#2e3192'
  },
  discountButton: {
    backgroundColor: '#f27baa',
    marginVertical: 8,
    borderWidth: 0,
    marginHorizontal: 20,
  },
  discountInput: {
    flex: 0,
    borderColor: '#b3b3b3'
  },
  discountModalTitle: {
    fontSize: 13,
    fontFamily: typography.light,
    color: '#888888',
    marginVertical: 25
  },
  discountModalWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'space-between'
  },
});
