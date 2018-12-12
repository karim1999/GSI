import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, H3, Form, Item, Button, Label, ListItem, Left, Body, Right, Thumbnail, Card, CardItem, Input} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class LecturePayment extends Component {
    constructor(props){
        super(props);
        this.state = {
            jointUsers: this.props.navigation.state.params
        }
    }
    
    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>
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

                <View style={styles.Box1}>  
                    <Card style={{borderWidth: 0}} transparent={true}>
                        <CardItem style={{}}>
                            <Left>
                            <Thumbnail source={require('../../../images/Background.png')} />
                            <Text style={{paddingLeft: 10, fontSize: 19, fontFamily: "Pangolin-Regular",}}>{this.state.jointUsers.user_name}</Text>
                            </Left>
                            <Right style={styles.allStarsComment}>
                                <View style={styles.firstBox}></View>
                            </Right> 
                        </CardItem>
                        <ListItem style={styles.list}>
                            <Body>
                            <H3 style={styles.font}>Paid</H3>
                            </Body>
                            <Right>
                                <Label style={styles.font}>{this.state.jointUsers.user_amount}$</Label>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.list}>
                            <Body>
                            <H3 style={styles.font}>Need to be paid</H3>
                            </Body>
                            <Right>
                                {
                                    ((this.state.jointUsers.lecture_price - this.state.jointUsers.user_amount) == 0 ) ? 
                                    (
                                        <Label style={styles.font}>None</Label>
                                    ):
                                    (
                                        <Label style={styles.font}>{this.state.jointUsers.lecture_price - this.state.jointUsers.user_amount}</Label>
                                    )
                                }
                            </Right>
                        </ListItem>
                    </Card>
                </View>


            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        flex:1, 
        height: 150, 
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 30
    },
    Box1: {
        flex:1,  
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5, 
        paddingTop: 0
    },
    firstBox:{
        width: 10, 
        height: 80, 
        backgroundColor: Color.fourthColor, 
        borderRadius: 5
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
    font:{
        fontFamily: "Pangolin-Regular"
    },
    list:{
        paddingRight: 60,  
        backgroundColor: '#fff',
        borderColor: 'transparent'
    }
   

});