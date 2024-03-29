import React from "react";
import {Button} from "../../../elements";

const PromotionButton = () => {
  return (
    <Button
      linkTo={'discounted-products'}
      buttonStyle={{
        backgroundColor: '#f27baa',
        height: 50,
        borderRadius: 25,
        marginHorizontal: 30,
        marginTop: 20,
        flexDirection: 'row-reverse',
        borderWidth: 0
      }}
      icon={'discountSquare'}
      iconStyle={{
        width: 25,
        height: 14,
        resizeMode: 'contain'
      }}
      titleStyle={{
        marginHorizontal: 5,
        marginTop: 3,
        color: '#2e3192',
        fontSize: 18,
        lineHeight: 35,
      }}
      title={"کالاهای تخفیف دار"}/>
  )
};

export default PromotionButton;
