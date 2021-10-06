import {Dimensions, StyleSheet} from "react-native";
import {typography} from '../../../../themes';

const {width} = Dimensions.get('screen');

export const BasketItemStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 30
  },
  image: {
    borderRadius: 10
  },
  deleteButton: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  basketButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  trashButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  justifyContentBetween: {
    flex: 1,
    justifyContent: 'space-between'
  },
  divider: {
    margin: 10
  },
  full: {
    flex: 1
  },
  blueTitle: {
    color: '#2e3192',
    fontSize: 10
  },
  pinkValue: {
    color: '#f27baa',
    fontSize: 10
  },
  blackTitle: {
    color: '#1a1a1a',
    fontSize: 13
  },
  countButton: {
    borderWidth: 0,
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  grayValue: {
    color: '#999999',
    fontSize: 13
  },
  infoWrapper: {
    flex: 1,
    marginRight: 10
  },
  infoContainer: {
    marginHorizontal: 30,
    marginTop: 10
  },
  title: {
    color: '#2e3192',
    fontSize: 14
  },
  greenValue: {
    color: '#39b54a',
    fontSize: 10
  },
  discountValue: {
    color: '#f27baa',
    fontSize: 13
  },
  finalPriceWrapper: {
    height: 30,
    flex: 1,
    justifyContent: 'space-between'
  },
  finalPrice: {
    color: '#19c978',
    fontSize: 13,
    fontFamily: typography.bold
  },
  height30: {
    height: 30
  },
  deleteModal: {alignItems: 'center', marginTop: 25, justifyContent: 'space-between', flex: 1},
  deleteModalWrapper: {alignItems: 'center'},
  deleteProduct: {fontSize: 18, fontFamily: typography.bold, color: '#333333'},
  areYouSure: {fontSize: 13, fontFamily: typography.light, color: '#888888', marginVertical: 25},
});
