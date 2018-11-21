import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Item, } from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class ResultSearch extends Component {

    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>

                    <Item style={styles.item}>
                        <Image source={require('../../../images/idea.png')} style={styles.image}/>
                        <View style={styles.text}>
                            <Text style={styles.txt}>prof. Tim</Text>
                            <Text style={styles.txt}>programming</Text>
                        </View>
                    </Item>

                    <Item style={styles.item}>
                        <Image source={require('../../../images/idea.png')} style={styles.image}/>
                        <View style={styles.text}>
                            <Text style={styles.txt}>prof. Tim</Text>
                            <Text style={styles.txt}>programming</Text>
                        </View>
                    </Item>
                </View>

            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        flex:1,  
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 30,
        paddingTop: 0,
    },
    BoxComment: {
        flex:1,  
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10, 
        paddingTop: 20,
    },
    item:{
        height: 120,
    },
    image:{
        width:80, 
        height: 80, 
        borderRadius: 10        
    },
    text:{
        paddingLeft: 60,
        paddingBottom: 25
    },
    txt:{
        fontFamily: "Pangolin-Regular",
        fontSize: 18
    },

});