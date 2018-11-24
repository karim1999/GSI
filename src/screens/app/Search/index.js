import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Form, Item, Picker, DatePicker, Button, } from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
    render() {
        return (
            <AppTemplate>
                <View style={styles.Box}>
                    <Item style={styles.lecture}>
                        <Icon type="FontAwesome" name="user" />
                        <Text style={styles.lectureTxt}>Lecture</Text>
                        <Form style={styles.form}>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    >
                                    <Picker.Item label="Wallet" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Item>
                        </Form>
                    </Item>

                    <Item style={styles.lecture}>
                        <Icon type="FontAwesome" name="calendar" />
                        <Text style={styles.lectureTxt}>Day</Text>
                        <View style={{marginLeft: 100}}>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                style={styles.form}
                            />
                        </View>
                    </Item>

                    <Item style={styles.lecture}>
                        <Icon type="Foundation" name="results" />
                        <Text style={styles.lectureTxt}>Subject</Text>
                        <Form style={styles.form}>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    >
                                    <Picker.Item label="Wallet" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Item>
                        </Form>
                    </Item>

                    <Button style={styles.button} >
                        <Text style={styles.buttonTxt}>Search</Text>
                    </Button>

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
    lecture:{
        backgroundColor: 'white', 
        borderColor: 'transparent',
        paddingTop: 30
    },
    lectureTxt:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    form:{
        width: 110,
        marginLeft: 80        
    },
    button:{
        backgroundColor: '#fef5e5',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 35,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonTxt:{
        color: '#000',
        fontSize: 20,
    },

});