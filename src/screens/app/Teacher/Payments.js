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
            <AppTemplate>
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
                                    <H3 style={styles.font}>{item.title} :</H3>

                                    <Item style={styles.item}>
                                        <View style={styles.viewImage}>
                                            <Image source={require('../../../images/idea.png')} style={styles.image}/>
                                        </View>
                                        <View>
                                        <Item style={{ backgroundColor: '#fff', borderColor: 'transparent' }}>
                                            <H3 style={styles.font}>Students: </H3>
                                            <H3> {item.joint_users.length}</H3>
                                        </Item>
                                        
                                        <Item style={styles.item2}>
                                            <Icon type="Entypo" name="back-in-time" />
                                            <Text style={styles.lectureTxt}>Duration</Text>
                                            <Text style={styles.right}> {item.start_duration} To {item.end_duration}</Text>
                                            
                                        </Item>

                                        <FlatList
                                        data={item.joint_users}
                                        renderItem={(student) => (

                                                <Button style={styles.button} onPress={()=> this.props.navigation.navigate('LecturePayment', 
                                                {...student.item, user_name: student.item.name, user_amount: student.item.pivot.amount, lecture_price: item.price})}>
                                                    <Text style={styles.buttonTxt}>View Student's Track</Text>
                                                </Button>

                                            
                                        )}
                                        keyExtractor = { (item, index) => index.toString() }
                                        />

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