import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Form, ListItem, Item, Button, Input, Picker, Icon, Left, Right, Radio} from 'native-base';


export default class SignUp2 extends Component {

    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../images/background.jpg')}>
                  <Image style={styles.logo} source={require('../../../images/LightenedLogo.png')} />
                <View style={styles.list}>
                    <Form>
                        <Item>
                            <Input placeholder="Civil ID Number" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#d9cdb7" }}
                                placeholderIconColor="#007aff"
                                style={{color: '#d9cdb7'}}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>

                        <Item style={{height: 70}}>
                            <Text style={styles.title}>Sex: </Text>

                            <View style={{flexDirection: 'row'}}>
                                <Icon type="FontAwesome" name='male' />
                                <Text style={styles.font}>Male</Text>
                                <Radio style={{paddingRight: 20, paddingLeft: 8}}/>

                                <Icon type="FontAwesome" name='female' />
                                <Text style={styles.font}>Female</Text>
                                <Radio style={{paddingLeft: 8}}/>  
                            </View>

                        </Item>

                        <Button style={styles.button}>
                            <Text style={styles.buttonTxt}>Register</Text>
                        </Button>
                    </Form>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  logo:{
    width: 400, 
    height: 400, 
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  list:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 100
  },
  input:{
    color: '#d9cdb7',
    textAlign: 'center',
    fontFamily: "Pangolin-Regular",
  },
  button:{
    backgroundColor: '#364675',
    padding: 70,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTxt:{
    color: '#fff',
    fontSize: 20,
  },
  signinButton:{
      color: '#d9cdb7'
  },
  title:{
      fontSize: 20,
      marginRight: 50,
      color: '#d9cdb7',
      fontFamily: "Pangolin-Regular",
  },
  font:{
    fontFamily: "Pangolin-Regular",
    color: '#d9cdb7'
},
});
