import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Item, Right, Left, Icon} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class Notifications extends Component {
    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>

                    <Item style={styles.item}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../../images/idea.png')} style={styles.image}/>
                        </View>
                        <View>
                            <Text style={styles.txt}>prof. Tim</Text>
                            <Text style={styles.txt}>programming</Text>
                            <Text style={styles.txt}>Date: 20/11/2018</Text>
                            <Text style={styles.txt}>Due date: 20/11/2018</Text>
                        </View>
                    </Item>

                    <Item style={styles.item}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../../images/idea.png')} style={styles.image}/>
                        </View>
                        <View>
                            <Text style={styles.txt}>prof. Tim</Text>
                            <Text style={styles.txt}>programming</Text>
                            <Text style={styles.txt}>Date: 20/11/2018</Text>
                            <Text style={styles.txt}>Due date: 20/11/2018</Text>
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
        paddingTop: 5,
        paddingBottom: 5
    },
    item:{
        padding: 10,
    },
    viewImage:{
        paddingRight: 50
    },
    image:{
        width:80, 
        height: 80, 
        borderRadius: 10        
    },
    txt:{
        fontFamily: "Pangolin-Regular",
    }

});