import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {H1, H3, Item, Label, Button} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class Payments extends Component {
    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>

                    <View style={styles.firstBox}></View>

                    <View style={styles.secondBox}>
                        <H3 style={styles.font}>Physics 100 :</H3>

                        <Item style={styles.item}>
                            <View style={styles.viewImage}>
                                <Image source={require('../../../images/idea.png')} style={styles.image}/>
                            </View>
                            <View>
                            <Item style={{ backgroundColor: '#fff', borderColor: 'transparent' }}>
                                <H3 style={styles.font}>Students: </H3>
                                <H3> 150</H3>
                            </Item>
                            
                            <Item style={styles.item2}>
                                <Icon type="Entypo" name="back-in-time" />
                                <Text style={styles.lectureTxt}>Duration</Text>
                                <Text style={styles.right}>11:00 To 13:00</Text>
                                
                            </Item>
                            
                            <Button style={styles.button} >
                                <Text style={styles.buttonTxt}>View Student's Track</Text>
                            </Button>
                            </View>
                        </Item>
                    </View>

                </View>

            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        flex:1, 
        height: 170, 
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 30
    },
    firstBox:{
        width: 30, 
        height: 170, 
        backgroundColor: Color.firstColor, 
        borderTopLeftRadius:5, 
        borderBottomLeftRadius:5
    },
    secondBox:{
        padding: 20
    },
    item:{
        paddingTop: 10,
        backgroundColor: '#fff',
        borderColor: 'transparent'
    },
    font:{
        fontFamily: "Pangolin-Regular",
    },
    viewImage:{
        paddingRight: 25
    },
    image:{
        width: 100, 
        height: 100, 
        borderRadius: 10        
    },
    button:{
        backgroundColor: '#fef5e5',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonTxt:{
        color: '#000',
        fontSize: 16,
    },

});