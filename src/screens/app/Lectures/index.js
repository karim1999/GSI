import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, AsyncStorage, Alert, } from 'react-native';
import { Icon, Form, Item, Picker, DatePicker, Button, Label, List, ListItem, Left, Body, 
    Right, Thumbnail, Card, CardItem, Toast} from 'native-base';
import Color from '../../../constants/colors';
import AppTemplate from "../appTemplate";
import axios from "axios";
import Server from "../../../constants/config";
import {setUser} from "../../../reducers";
import {connect} from "react-redux";

class Lectures extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            lecture: this.props.navigation.state.params ,
            isLoading: false,
            isSetting: false,

        };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    onRegisterPressed(){
        this.setState({
            isLoading: true
        });
        return AsyncStorage.getItem('token').then(userToken => {
            return axios.post(Server.url + 'api/jointLecture/'+this.state.lecture.id+'?token='+userToken)
            .then(response => {
                this.setState({
                    isLoading: false,
                });
                Toast.show({
                    text: "done.",
                    buttonText: "Ok",
                    type: "success"
                })
            }).catch(error => {
                alert(JSON.stringify(error))
            })
        }).then(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    deleteLecture(){
        Alert.alert(
            "Are you sure?",
            "No one will be able to access this lecture after deleting",
            [
                {text: "Cancel", onPress: () => console.log('Cancel Pressed')},
                {text: "Ok", onPress: () => {
                        this.setState({
                            isDeleting: true,
                        });
                        AsyncStorage.getItem('token').then(userToken => {
                            return axios.delete(Server.url+'api/deleteLecture/'+this.state.lecture.id+'?token='+userToken).then(response => {
                                // alert(response.data);
                                this.props.navigation.navigate("Teacher");
                                this.props.setUser(response.data.user);
                                this.setState({
                                    isLoading: false,
                                });
                                Toast.show({
                                    text: "The lecture was deleted successfully",
                                    buttonText: "Ok",
                                    type: "success"
                                })
                            }).catch(error => {
                                this.setState({
                                    isLoading: false,
                                });
                                Toast.show({
                                    text: "Unknown error has occurred",
                                    buttonText: "Ok",
                                    type: "danger"
                                })
                            })
                        });
                    }},
            ],
            { cancelable: false }
        )
    }
    
    render() {
        return (
            <AppTemplate>
                
                <Button onPress={() => this.setState({isSetting: !this.state.isSetting})} style={{width: "100%", alignItems: "center"}} dark><Text style={{flex: 1, color: '#fff'}}> Settings </Text>
                <Icon name={this.state.isSetting? "ios-arrow-dropup-circle": "ios-arrow-dropdown-circle"} style={{color: "#FFFFFF", fontSize: 25}}/>
                </Button>

                {
                    (this.state.isSetting) && (
                        
                            (this.props.user.type == 1) ? (
                                <List style={{backgroundColor: "#000", right: 0}}>
                                    <ListItem
                                        
                                    >
                                        <Text style={{flex: 1, color: '#fff'}}>Applying</Text>
                                    </ListItem> 
                                </List>

                            ):(
                                <List style={{backgroundColor: "#000", right: 0}}>
                                    <ListItem
                                        onPress={() => this.props.navigation.navigate("EditLecture", {...this.state.lecture})}
                                    >
                                        <Text style={{flex: 1, color: '#fff'}}>Edit Course</Text>
                                    </ListItem>
                                    
                                    <ListItem
                                        onPress={() => this.deleteLecture()}
                                    >
                                        <Text style={{flex: 1, color: '#fff'}}>Delete Course</Text>
                                    </ListItem>
                                </List>
                            )  
                    )
                }
                    <View style={styles.Box}>

                        <Item style={styles.item}>
                            <Image source={require('../../../images/idea.png')} style={styles.image}/>
                            <View style={styles.text}>
                            {/* <Button onPress={()=> this.onRegisterPressed()}>
                                <Text>register</Text>
                            </Button> */}
                                <Text style={styles.txt}>{this.state.lecture.user.name}</Text>
                                <Text style={styles.txt}>{this.state.lecture.title}</Text>
                            </View>
                            <View style={styles.allStars}>
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                            </View>
                        </Item>

                        <Item style={styles.item2}>
                            <Icon type="FontAwesome" name="dollar" />
                            <Text style={styles.lectureTxt}>Cost</Text>
                            <Button transparent style={styles.price}>
                                <Text style={styles.priceText}>{this.state.lecture.price}</Text>
                                <Text style={styles.priceIcon}>$</Text>
                            </Button>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="Entypo" name="wallet" />
                            <Text style={styles.lectureTxt}>Payment</Text>
                            <Text style={styles.right}>Before attending</Text>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="Foundation" name="results" />
                            <Text style={styles.lectureTxt}>Course Type</Text>
                            <Text style={styles.right}>{this.state.lecture.type_course}</Text>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="FontAwesome" name="transgender" />
                            <Text style={styles.lectureTxt}>Gender</Text>
                            <Text style={styles.right}>Male</Text>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="Entypo" name="back-in-time" />
                            <Text style={styles.lectureTxt}>Duration</Text>
                            <Text style={styles.right}>{this.state.lecture.start_duration} To {this.state.lecture.end_duration}</Text>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="FontAwesome" name="users" />
                            <Text style={styles.lectureTxt}>Attendance</Text>
                            <Text style={styles.right}>{this.state.lecture.attendance}</Text>
                            
                        </Item>
                        <Item style={styles.item2}>
                            <Icon type="FontAwesome" name="check-square-o" />
                            <Text style={styles.lectureTxt}>Allowed</Text>
                            <Text style={styles.right}>{this.state.lecture.allowed}</Text>
                            
                        </Item>


                    </View>

                <Text style={styles.commentTxt}>Comments</Text>

                <View style={styles.BoxComment}>  
                    <Card style={{borderWidth: 0}} transparent={true}>
                        <CardItem style={{}}>
                            <Left>
                            <Thumbnail source={require('../../../images/Background.png')} />
                            <Text style={{paddingLeft: 10, fontSize: 19, fontFamily: "Pangolin-Regular",}}>John Hendrseon</Text>
                            </Left>
                            <Right style={styles.allStarsComment}>
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                                <Icon style={styles.star} type="MaterialCommunityIcons" name="star" />
                            </Right> 
                        </CardItem>
                        <CardItem style={{}}>
                            <Body>
                            <Text style={{fontFamily: "Pangolin-Regular",}}>asdsadsaddsddddsadasdsad</Text>
                            </Body>
                        </CardItem>
                    </Card>
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
        padding: 5, 
    },
    item:{
        height: 120,
    },
    item2:{
        paddingTop: 20,
        paddingBottom: 20
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
    star:{
        color: '#eeb829',
        fontSize: 22,
    },
    allStars:{
        position: 'absolute',
        bottom: 6,
        right: 18,
        flexDirection: 'row'
    },
    allStarsComment:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    lectureTxt:{
        fontSize: 18,
        paddingLeft: 10,
        fontFamily: "Pangolin-Regular",
    },
    price:{
        marginLeft: 110
    },
    right:{
        position: 'absolute',
        left: 200,
        fontFamily: "Pangolin-Regular",
    },
    priceText:{
        backgroundColor:'#fff',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 0.5,
        borderColor: '#000',
    },
    priceIcon:{
        backgroundColor:'#eeb829',
        color: '#fff',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    commentTxt:{
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15
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
)(Lectures);
