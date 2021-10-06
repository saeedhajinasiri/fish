import React from 'react';
import {Button, Row, Text, TouchableOpacity, View} from "../../../elements";
import {SuggestScreenStyle} from "./SuggestScreen.style";
import AssetsComponent from '../../../assets';
import {AssetFilesName} from '../../../assets/AssetFiles';

export const SuggestScreen = () => {
  return (
    <View style={SuggestScreenStyle.container}>
      <View style={SuggestScreenStyle.wrapper}>
        <View style={SuggestScreenStyle.contactInfo}>
          <Text style={SuggestScreenStyle.supportTitle}>لینک دعوت را کپی کرده و از طریق پیامک ارسال کنید و یا از طریق
            شبکه های اجتماعی :</Text>

          <View>
            <Button
              buttonStyle={SuggestScreenStyle.button}
              titleStyle={SuggestScreenStyle.buttonTitle}
              title={"کپی کردن لینک دعوت"}
            />
            <Row style={SuggestScreenStyle.social}>
              <TouchableOpacity>
                <AssetsComponent
                  resizeMode={"contain"}
                  style={SuggestScreenStyle.icon}
                  name={AssetFilesName.pinkTelegram}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AssetsComponent
                  resizeMode={"contain"}
                  style={SuggestScreenStyle.icon}
                  name={AssetFilesName.call}
                />
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </View>

    </View>
  )
};
