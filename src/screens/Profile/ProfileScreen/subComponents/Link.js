import React from 'react';
import {Row, Text, TouchableOpacity} from '../../../../elements';
import {ProfileScreenStyle} from '../ProfileScreen.style';
import AssetsComponent from '../../../../assets';
import {AssetFilesName} from '../../../../assets/AssetFiles';

const Link = ({icon, title, ...rest}) => {
  return (
    <Row>
      <TouchableOpacity
        {...rest}
        style={ProfileScreenStyle.links}>
        <Row style={ProfileScreenStyle.alignCenter}>
          <AssetsComponent
            style={{width: 27, height: 21}}
            name={AssetFilesName[icon]}
          />
          <Text style={ProfileScreenStyle.linkTitle}>{title}</Text>
        </Row>
        <AssetsComponent
          resizeMode={"contain"}
          style={ProfileScreenStyle.arrow}
          name={AssetFilesName['profileArrowLeft']}
        />
      </TouchableOpacity>
    </Row>
  )
}

export default Link;
