import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Form, Item, Button, Input} from 'native-base';


export default class SignUp extends Component {

    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../images/background.jpg')}>
                  <Image style={styles.logo} source={require('../../../images/LightenedLogo.png')} />
                <View style={styles.list}>
                    <Form>
                        <Item style={styles.margin}>
                            <Input placeholder="First Name" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item style={styles.margin}>
                            <Input placeholder="Middle Name" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item style={styles.margin}>
                            <Input placeholder="Last Name" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item style={styles.margin}>
                            <Input placeholder="E-mail" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item style={styles.margin}>
                            <Input placeholder="Number" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Button style={styles.button}>
                            <Text style={styles.buttonTxt}>Next</Text>
                        </Button>
                    </Form>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  logo:{
    width: 300, 
    height: 300, 
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  list:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 90 
  },
  input:{
    color: '#fff',
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
    fontFamily: "Pangolin-Regular",
  },
  signinButton:{
      color: '#d9cdb7'
  },
  margin:{
      marginBottom: 10
  }
});
