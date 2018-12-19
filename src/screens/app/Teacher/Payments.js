import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';
import {H1, H3, Item, Label, Button, Icon} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";
import axios from "axios";
import Server from "../../../constants/config";

export default class Payments extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLectAndUser: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        return AsyncStorage.getItem('token').then(userToken => {
            return axios.get(Server.url + 'api/getusers?token='+userToken)
            .then(response => {
                this.setState({
                    isLoading: false,
                    showLectAndUser: response.data
                })
            }).catch(error => {
                Toast.show({
                    text: 'Error reachig server',
                    buttonText: "Ok",
                    type: "danger"
                })
            })
        })
    }

    render() {
        return (
            <AppTemplate title="Payment">
                {
                    (this.state.isLoading)? (
                        <View>
                            <ActivityIndicator style={{paddingTop: 20}} size="large" color={Color.mainColor} />
                        </View>
                    ): (
                        <FlatList
                            ListEmptyComponent={
                                <Text style={{alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center"}}>Your profile is empty start adding lectures</Text>
                            }
                            data={this.state.showLectAndUser}
                            renderItem={({item}) => (

                            <View style={styles.Box}>

                                <View style={styles.firstBox}></View>

                                <View style={styles.secondBox}>
                                    <H3 style={styles.font}>{item.title}</H3>

                                    <Item style={styles.item}>
                                        <View style={styles.viewImage}>
                                            <Image source={require('../../../images/idea.png')} style={styles.image}/>
                                        </View>
                                        <View>
                                        <Item style={{ backgroundColor: '#fff', borderColor: 'transparent', paddingBottom: 10 }}>
                                            <H3 style={styles.font}>Students </H3>
                                            <H3 style={{marginLeft: 60}}>{item.joint_users.length}</H3>
                                        </Item>
                                        
                                        <Item style={{ backgroundColor: '#fff', borderColor: 'transparent', paddingBottom: 10 }}>
                                            <Icon type="FontAwesome" name="hourglass-start" />
                                            <Text> {item.start_duration}</Text>
                                        </Item>

                                        <Item style={{ backgroundColor: '#fff', borderColor: 'transparent' }}>
                                            <Icon type="FontAwesome" name="hourglass-end" />
                                            <Text> {item.end_duration}</Text>
                                        </Item>

                                        <Button style={styles.button} onPress={()=> this.props.navigation.navigate('LecturePayment', {...item})}>
                                            <Text style={styles.buttonTxt}>View Student's Track</Text>
                                        </Button>
                                        
                                        {/* <FlatList
                                        data={item.joint_users}
                                        renderItem={(student) => (

                                                <Button style={styles.button} onPress={()=> this.props.navigation.navigate('LecturePayment', 
                                                {...student.item, user_name: student.item.name, user_amount: student.item.pivot.amount, lecture_price: item.price})}>
                                                    <Text style={styles.buttonTxt}>View Student's Track</Text>
                                                </Button>

                                            
                                        )}
                                        keyExtractor = { (item, index) => index.toString() }
                                        /> */}

                                        </View>
                                    </Item>
                                </View>

                            </View>
                        )}
                        keyExtractor = { (item, index) => index.toString() }
                        />
                    )
                }

            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        height: 200, 
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 30
    },
    firstBox:{
        width: 30, 
        height: 200, 
        backgroundColor: Color.firstColor, 
    },
    secondBox:{
        padding: 20
    },
    item:{
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
    },
    button:{
        backgroundColor: '#fef5e5',
        padding: 10,
        marginTop: 13,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonTxt:{
        color: '#000',
        fontSize: 16,
    },

});