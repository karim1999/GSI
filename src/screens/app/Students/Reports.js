import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Icon, Form, Item, Picker, DatePicker, Button, H3 } from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";
import {setUser} from "../../../reducers";
import {connect} from "react-redux";

class Reports extends Component {
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
            <AppTemplate navigation={this.props.navigation} title="Reports">
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

                <H3 style={styles.title}>Latest Lectures :</H3>

                <FlatList
                        ListEmptyComponent={
                            <Text style={{alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center"}}>Your profile is empty start joining lectures</Text>
                        }
                        data={this.props.user.joint_lectures}
                        renderItem={({item}) => (

                        <View style={styles.Box1}>

                            <Item style={styles.item}>
                                <View style={styles.viewImage}>
                                    <Image source={require('../../../images/idea.png')} style={styles.image}/>
                                </View>
                                <View>
                                    <View style={{flexDirection: 'row', paddingBottom: 7}}>
                                        <Icon type="FontAwesome" name="user" />
                                        <Text>{item.user.name}</Text>
                                    </View>

                                    <View style={{flexDirection: 'row', paddingBottom: 7}}>
                                        <Icon type="Foundation" name="results" />
                                        <Text style={styles.txt}>{item.subject}</Text>
                                    </View>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon type="Ionicons" name="ios-list-box" />
                                        <Text style={styles.txt}>{item.start_duration}</Text>
                                    </View>

                                </View>
                            </Item>
                        </View>
                )}
                keyExtractor = { (item, index) => index.toString() }
                />

            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor: '#fff',
        padding: 30,
        paddingTop: 0,
    },
    Box1: { 
        backgroundColor: '#fff',
        padding: 30,
        paddingTop: 10,
        paddingBottom: 10
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
    item:{
        padding: 10,
    },
    viewImage:{
        paddingRight: 50
    },
    image:{
        width:100, 
        height: 100, 
        borderRadius: 10        
    },
    txt:{
        fontFamily: "Pangolin-Regular",
    },
    title:{
        padding: 20,
        fontFamily: "Pangolin-Regular",
    }

});

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports);