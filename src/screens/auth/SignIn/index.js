import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Form, Item, Button, Input} from 'native-base';


export default class SignIn extends Component {

    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../images/background.jpg')}>
                  <Image style={styles.logo} source={require('../../../images/LightenedLogo.png')} />
                  
                <View style={styles.list}>
                    <Form>
                        <Item>
                            <Input placeholder="Username" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Item last>
                            <Input secureTextEntry={true} placeholder="Password" placeholderTextColor= "#d9cdb7" style={styles.input}/>
                        </Item>

                        <Button style={styles.button} >
                            <Text style={styles.buttonTxt}>Login</Text>
                        </Button>
                    </Form>

                    <TouchableOpacity>
                        <Text style={styles.forgetButton}> Forgot Your Password? </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  logo:{
    width: 450, 
    height: 450, 
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  list:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
    paddingBottom: 200
  },
  input:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: "Pangolin-Regular",
  },
  button:{
    backgroundColor: '#37446e',
    paddingTop: 10,
    paddingBottom: 10,
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
  forgetButton:{
      color: '#d9cdb7',
      fontSize: 16,
      marginTop: 10,
      fontFamily: "Pangolin-Regular",
  }
});
