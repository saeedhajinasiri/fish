import React from "react";
import {View} from "../../../../elements";
import Promotion from "../../../../components/Promotion/Promotion";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumbs = () => {
  return (
    <View style={{marginTop: 15}}>
      <Promotion style={{paddingLeft: 0, marginTop: 15}} containerStyle={{paddingLeft: 10}}>
        <BreadcrumbItem title={"ماهی سالمون شمال"}/>
        <BreadcrumbItem title={"ماهی سالمون شمال"}/>
        <BreadcrumbItem title={"ماهیها"}/>
        <BreadcrumbItem title={"همه محصولات"}/>
      </Promotion>
    </View>
  )
};

export default Breadcrumbs;
