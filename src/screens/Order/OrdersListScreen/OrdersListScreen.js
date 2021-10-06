import React from 'react';
import {ScrollView} from 'react-native';
import {Row, Text, View} from "../../../elements";
import {OrdersListScreenStyle} from "./OrdersListScreen.style";
import Button from "../../../elements/Button";
import Divider from "../../../elements/Divider/Divider";

export const OrdersListScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={OrdersListScreenStyle.container}>
        <View style={OrdersListScreenStyle.wrapper}>
          <View style={OrdersListScreenStyle.walletInfo}>

            <Row>
              <Button
                buttonStyle={OrdersListScreenStyle.button}
                titleStyle={OrdersListScreenStyle.buttonTitle}
                title={"درحال اجرا"}
              />
              <Button
                buttonStyle={OrdersListScreenStyle.button}
                titleStyle={OrdersListScreenStyle.buttonTitle}
                title={"مرجوعی"}
              />
              <Button
                buttonStyle={OrdersListScreenStyle.selectedButton}
                titleStyle={OrdersListScreenStyle.selectedButtonTitle}
                title={"تکمیل شده"}
              />
            </Row>
            <Divider/>
            <Row style={{marginTop: 20}}>
              <Row style={OrdersListScreenStyle.headerTitleBox}>
                <Text style={OrdersListScreenStyle.headerInfo}>شماره سفارش</Text>
                <Text style={OrdersListScreenStyle.headerInfo}>وضعیت سفارش</Text>
                <Text style={OrdersListScreenStyle.headerInfo}>عملیات</Text>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
            <Row>
              <Row style={OrdersListScreenStyle.titleBox}>
                <Text style={OrdersListScreenStyle.info}>12354</Text>
                <Text style={OrdersListScreenStyle.info}>درحال بررسی</Text>
                <Row style={OrdersListScreenStyle.info}>
                  <Button
                    buttonStyle={OrdersListScreenStyle.showButton}
                    titleStyle={OrdersListScreenStyle.showButtonTitle}
                    title={"نمایش"}
                  />
                </Row>
              </Row>
            </Row>
          </View>
        </View>
      </View>
    </ScrollView>

  )
};
