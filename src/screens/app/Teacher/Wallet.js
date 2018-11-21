import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {H1, H3, ListItem, Label, Input, Button, Icon, Item} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class Wallet extends Component {
    render() {
        return (
            <AppTemplate>
                <View style={styles.Box0}>
                    <Item style={{height: 70, padding: 15, paddingBottom:0, backgroundColor: '#fff', borderColor: 'transparent' }}>
                        <Icon type="FontAwesome" name='user' />
                        <Label style={styles.font}>Student Name </Label>
                        <Input
                                placeholder="Name..."
                                placeholderTextColor="#ccc5c5"
                        />
                    </Item>

                    <Button style={styles.button} >
                        <Text style={styles.buttonTxt}>Search</Text>
                    </Button>

                </View>

                <View style={styles.Box}>

                    <View style={styles.firstBox}></View>

                    <View style={styles.secondBox}>
                        <Item style={{height: 45}}>
                            <Image source={require('../../../images/No-headshot.png')} style={styles.image}/>
                            <Label style={styles.font}>Abdo labib </Label>
                        </Item>
                        <Item style={{height: 45}}>
                            <Icon type="FontAwesome" name='dollar' />
                            <Label style={styles.font}>Balance </Label>
                            <Button transparent style={styles.price}>
                                <Text style={styles.priceText}>200</Text>
                                <Text style={styles.priceIcon}>$</Text>
                            </Button>
                        </Item>
                        <Item style={{height: 45}}>
                            <Image source={require('../../../images/img_454446.png')} style={styles.image}/>
                            <Label style={styles.font}>Paid </Label>
                            <Button transparent style={styles.price2}>
                                <Text style={styles.priceText}>200</Text>
                                <Text style={styles.priceIcon}>$</Text>
                            </Button>
                        </Item>
                        <Item style={{height: 45}}>
                            <Image source={require('../../../images/internt_web_technology-03-512.png')} style={styles.image}/>
                            <Label style={styles.font}>Payment Method: </Label>
                            <Image source={require('../../../images/21.png')} style={styles.imageRight}/>
                            <Text style={styles.rightCash}>Cash </Text>
                        </Item>
                        <Item style={{height: 45}}>
                            <Image source={require('../../../images/calendar_131786.png')} style={styles.image}/>
                            <Label style={styles.font}>Date </Label>
                            <Text style={styles.right}>20/11/2018 </Text>
                        </Item>
                    </View>

                </View>

            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box0: {
        flex:1, 
        height: 150, 
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 30
    },
    Box: {
        flex:1, 
        height: 230, 
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 30
    },
    firstBox:{
        width: 30, 
        height: 230, 
        backgroundColor: Color.firstColor, 
        borderTopLeftRadius:5, 
        borderBottomLeftRadius:5
    },
    secondBox:{
        paddingTop: 0,
        padding: 15
    },
    button:{
        backgroundColor: '#fef5e5',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 35,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonTxt:{
        color: '#000',
        fontSize: 20,
    },
    price:{
        marginLeft: 115
    },
    price2:{
        marginLeft: 140
    },
    right:{
        position: 'absolute',
        left: 200,
        fontFamily: "Pangolin-Regular",
    },
    priceText:{
        backgroundColor:'#fff',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 0.5,
        borderColor: '#000',
    },
    priceIcon:{
        backgroundColor:'#eeb829',
        color: '#fff',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    font:{
        fontFamily: "Pangolin-Regular",
    },
    image:{
        width:20, 
        height: 20,
        marginRight: 5         
    },
    imageRight:{
        width: 35, 
        height: 35,
        position: 'absolute',
        left: 200,
    },
    rightCash:{
        position: 'absolute',
        left: 240,
        fontFamily: "Pangolin-Regular",
    }

});