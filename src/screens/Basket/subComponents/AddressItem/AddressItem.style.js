import {Dimensions, StyleSheet} from "react-native";
import {typography} from '../../../../themes';

const {width} = Dimensions.get('screen');

export const AddressItemStyle = StyleSheet.create({
  wrapper: {
    width: width / 4 * 3,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 30,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 10
  },
  deleteModal: {alignItems: 'center', marginTop: 25, justifyContent: 'space-between', flex: 1},
  deleteModalWrapper: {alignItems: 'center'},
  deleteProduct: {fontSize: 18, fontFamily: typography.bold, color: '#333333'},
  areYouSure: {fontSize: 13, fontFamily: typography.light, color: '#888888', marginVertical: 25},
});
