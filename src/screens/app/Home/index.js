import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {H1, H3, Icon} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class MyHomeScreen extends Component {
    
    static navigationOptions =  {
        title: 'Hello!',
        drawerLabel : 'Home',
        headerTitle: (
            <Image 
                source = {require('../../../images/home.png')}
                style={{width: 26, height: 26, tintColor: '#f3f3f3'}}
            />
        ),
    }
    render() {
        return (
            <AppTemplate navigation={this.props.navigation}>
                <View style={styles.Box}>

                    <View style={styles.firstBox}></View>

                    <View style={styles.secondBox}>
                        <H1 style={styles.font}>SAT</H1>
                        <H1 style={styles.date}>08</H1>                        
                    </View>

                    <View style={styles.thirdBox}>
                        <H3 style={{paddingBottom: 10, fontFamily: "Pangolin-Regular",}}>Math Lecture</H3>
                        <H3 style={styles.font}>Phyiscs Lecture</H3>
                    </View>

                </View>

                <View style={styles.Box}>
                
                    <View style={styles.firstBox}></View>

                    <View style={styles.secondBox}>
                        <H1 style={styles.font}>SAT</H1>
                        <H1 style={styles.date}>08</H1>                        
                    </View>

                    <View style={styles.thirdBox}>
                        <H3 style={{paddingBottom: 10, fontFamily: "Pangolin-Regular",}}>Math Lecture</H3>
                        <H3 style={styles.font}>Phyiscs Lecture</H3>
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
        width: 100, 
        height: 170, 
        backgroundColor: Color.background,
        padding: 25,
        justifyContent: 'center'
    },
    thirdBox:{
        padding: 20
    },
    date:{
        marginLeft: 7,
        fontFamily: "Pangolin-Regular",
    },
    font:{
        fontFamily: "Pangolin-Regular",
    }

});