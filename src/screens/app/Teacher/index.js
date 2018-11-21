import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Item, H3 } from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class Teacher extends Component {

    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>

                    <Item style={styles.itemRobot}>
                        <View style={styles.viewImageRobot}>
                            <Image source={require('../../../images/cute-smiling-robot.png')} style={styles.imageRobot}/>
                        </View>
                        <View>
                            <H3 style={styles.txt}>Hello, Teacher</H3>
                            <H3 style={styles.txt}>Welcome back!</H3>
                        </View>
                    </Item>

                    <H3 style={styles.title}>Previous Lectures :</H3>

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
        paddingTop: 0,
    },
    BoxComment: {
        flex:1,  
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10, 
        paddingTop: 20,
    },
    itemRobot:{
        padding: 10,
        backgroundColor: '#fff', 
        borderColor: 'transparent' 
    },
    item:{
        padding: 10,
    },
    title:{
        fontFamily: "Pangolin-Regular",
    },
    viewImageRobot:{
        paddingRight: 15
    },
    viewImage:{
        paddingRight: 50
    },
    imageRobot:{
        width:140, 
        height: 140,         
    },
    image:{
        width:80, 
        height: 80, 
        borderRadius: 10        
    },
    txt:{
        fontFamily: "Pangolin-Regular",
    },

});