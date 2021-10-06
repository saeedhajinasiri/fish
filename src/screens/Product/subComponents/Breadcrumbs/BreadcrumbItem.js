import React from "react";
import {Text} from "../../../../elements";
import TouchableOpacity from "../../../../elements/TouchableOpacity/TouchableOpacity";
import AssetsComponent from "../../../../assets";
import {AssetFilesName} from "../../../../assets/AssetFiles";

const BreadcrumbItem = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row-reverse',
        height: 50,
        borderRadius: 25,
        borderColor: '#2e3192',
        borderWidth: 1,
        alignItems: 'center',
        transform: [{scale: -1}],
        marginHorizontal: 10
      }}
    >
      <Text style={{marginHorizontal: 10}}>{title}</Text>
      <AssetsComponent name={AssetFilesName.arrowLeft} width={11} height={25} style={{marginHorizontal: 10}}/>
    </TouchableOpacity>
  )
};

export default BreadcrumbItem;
