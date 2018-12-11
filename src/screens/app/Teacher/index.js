import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon, Item, H3, Toast } from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";
import {setUser} from "../../../reducers";
import {connect} from "react-redux";
import axios from "axios";
import Server from "../../../constants/config";

class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLectures: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        return AsyncStorage.getItem('token').then(userToken => {
            return axios.get(Server.url + 'api/lectures?token='+userToken)
            .then(response => {
                this.setState({
                    isLoading: false,
                    showLectures: response.data
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
            <AppTemplate fab navigation={this.props.navigation}>
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
                        data={this.state.showLectures}
                        renderItem={({item}) => (
                        <View style={styles.Box}>
        
                            <Item style={styles.itemRobot}>
                                <View style={styles.viewImageRobot}>
                                    <Image source={require('../../../images/cute-smiling-robot.png')} style={styles.imageRobot}/>
                                </View>
                                <View>
                                    <H3 style={styles.txt}>Hello, {item.user.name}</H3>
                                    <H3 style={styles.txt}>Welcome back!</H3>
                                </View>
                            </Item>
        
                            <H3 style={styles.title}>Previous Lectures :</H3>
        
                            <Item style={styles.item} onPress={()=>this.props.navigation.navigate('Lectures', {...item})}>
                                <View style={styles.viewImage}>
                                    <Image source={require('../../../images/idea.png')} style={styles.image}/>
                                </View>
                                <View>
                                    <Text style={styles.txt}>{item.title}</Text>
                                    <Text style={styles.txt}>{item.subject}</Text>
                                    <Text style={styles.txt}>Date: 20/11/2018</Text>
                                    <Text style={styles.txt}>Due date: 20/11/2018</Text>
                                </View>
                            </Item>
                            
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

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teacher);