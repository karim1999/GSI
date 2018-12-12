import React, { Component } from 'react';
import {StyleSheet, View, AsyncStorage, ActivityIndicator, ListView, TextInput, TouchableOpacity} from 'react-native';
import {
    Button,
    Item,
    Text,
    Input,
    Form,
    Icon,
    Label,
    Textarea,
    Picker,
    Toast,
    ListItem,
    Right, Radio, Left,DatePicker,
} from 'native-base';
import AppTemplate from "../appTemplate";
import ImagePicker from "react-native-image-picker";
import TimePicker from 'react-native-simple-time-picker';
import axios from "axios/index";
import Server from "../../../constants/config";
import Table from 'react-native-simple-table'
import _ from 'lodash'
import MultiSelect from 'react-native-multiple-select';

export default class EditLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lecture: this.props.navigation.state.params,
        };
    }

   

    selectImage(){
        let options = {
            title: "Course Image",
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                console.log(response.data);
                this.setState({
                    img: response.uri
                });
            }
        });

    }

    EditLecture(id){
        this.setState({
            isLoading: true
        });
        return AsyncStorage.getItem('token').then(userToken => {
            let data = new FormData();
            data.append('title', this.state.title);
            data.append('price', this.state.price);
            data.append('description', this.state.description);
            if (this.state.img) {
                data.append('img', {
                    name: "img",
                    uri: this.state.img,
                    type: 'image/png'
                });
            }
            return axios.post(Server.url + 'api/editCourse/'+id+'?token='+userToken, data).then(response => {
                this.setState({
                    isLoading: false,
                });
                Toast.show({
                    text: "A Course was added successfully",
                    buttonText: "Ok",
                    type: "success"
                });
                this.props.navigation.navigate("CourseView");
            }).catch(error => {
                alert(error.data)
            })
        }).then(() => {
            this.setState({
                isLoading: false
            });
        });
    }
    
    render() {
        const data = this.state;
        return (
            <AppTemplate>
                    <Form style={styles.container}>

                        <Item style={{height: 70}}>
                            <Icon type="SimpleLineIcons" name='tag' style={{fontSize:17}} />
                            <Text style={styles.font}>Name </Text>
                            <Input onChangeText={(title) => this.setState({title})}
                                   placeholder="ex: Quantum mechanics..."
                                   placeholderTextColor="#ccc5c5"
                                   value={this.state.lecture.title}
                            />
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="MaterialIcons" name='subject' style={{fontSize:22}} />
                            <Text style={styles.font}>Subject </Text>
                            <Input onChangeText={(subject) => this.setState({subject})}
                                   placeholder="ex: Physics..."
                                   placeholderTextColor="#ccc5c5"
                                   value={this.state.lecture.subject}
                            />
                        </Item>

                        <Item style={styles.lecture}>
                            <Icon type="FontAwesome" name="calendar" />
                            
                            <Text style={styles.lectureTxt}>From</Text>
                            <DatePicker
                                defaultDate={new Date((this.state.start_date))}
                                minimumDate={new Date(1990, 1, 1).getTime()}
                                maximumDate={new Date(2018, 12, 31).getTime()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(val) => this.setState({start_date: val})}
                                style={styles.form}
                                />

                            <Text style={styles.lectureTxt}>To</Text>
                            <DatePicker
                                defaultDate={new Date((this.state.end_date))}
                                minimumDate={new Date(1990, 1, 1).getTime()}
                                maximumDate={new Date(2018, 12, 31).getTime()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(val) => this.setState({end_date: val})}
                                style={styles.form}
                                />
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon name='md-time' />
                            <Text style={styles.lectureTxt}>From</Text>
                            <View style={styles.time}>
                                <TimePicker
                                start_duration={this.start_duration}
                                selectedMinutes={this.selectedMinutes}
                                onChange={(hours, minutes) => this.setState({ start_duration: hours, selectedMinutes: minutes })}
                            />
                          </View>
                          <Text style={{paddingLeft:10, paddingRight:10}}>To</Text>
                            <View style={styles.time}>
                                <TimePicker
                                end_duration={this.end_duration}
                                selectedMinutes={this.selectedMinutes}
                                onChange={(hours, minutes) => this.setState({ end_duration: hours, selectedMinutes: minutes })}
                            />
                          </View>
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name='dollar' />
                            <Label style={styles.font}>Price </Label>
                            <Input onChangeText={(price) => this.setState({price})}
                                    keyboardType='numeric'
                                    placeholder="ex:20 $..."
                                    placeholderTextColor="#ccc5c5"
                                    value={this.state.lecture.price}
                            />
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon name='md-images' />
                            <Label style={styles.font}>Image </Label>
                            <Button
                                style={{alignSelf: "center"}}
                                onPress={() => this.selectImage()} light>
                                <Text style={styles.font}>
                                    {
                                        (this.state.img) && (
                                            <Icon name="md-checkmark-circle" style={{color: "green", fontSize: 17, marginRight: 10}} />
                                        )
                                    }
                                     Select</Text>
                            </Button>
                        </Item>

                        {/* <Item style={{height: 70}}>
                            <Icon type="Foundation" name='book' />
                            <Text style={styles.font}>Course Type </Text>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.font}> College </Text>
                                <Radio style={{paddingRight: 20, paddingLeft: 8}} selected={this.state.type_course === 1}
                                    onPress={(type_course) => {this.setState({type_course: 1})}}/>

                                <Text style={styles.font}>Genral</Text>
                                <Radio style={{paddingLeft: 8}} selected={this.state.type_course === 2}
                                    onPress={(type_course) => {this.setState({type_course: 2})}}/>  
                            </View>

                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name="transgender" />
                            <Text style={styles.font}>Sex:</Text>

                            <View style={{flexDirection: 'row',  paddingLeft: 10}}>
                                <Icon type="FontAwesome" name='male' />
                                <Text style={styles.font}>Male</Text>
                                <Radio style={{paddingRight: 5, paddingLeft: 8}} selected={this.state.gender === 1}
                                    onPress={(gender) => {this.setState({gender: 1})}}/>

                                <Icon type="FontAwesome" name='female' />
                                <Text style={styles.font}>Female</Text>
                                <Radio style={{paddingLeft: 8}} selected={this.state.gender === 2}
                                    onPress={(gender) => {this.setState({gender: 2})}}/>
                                
                                <Icon type="FontAwesome" name='transgender-alt' />
                                <Text style={styles.font}>Both</Text>
                                <Radio style={{paddingLeft: 8}} selected={this.state.gender === 3}
                                    onPress={(gender) => {this.setState({gender: 3})}}/>
                            </View>

                        </Item> */}

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name='users' />
                            <Text style={styles.font}>Students </Text>
                            <Input onChangeText={(allowed) => this.setState({allowed})}
                                    keyboardType='numeric'
                                    placeholder="ex:150 student..."
                                    placeholderTextColor="#ccc5c5"
                                    value={this.state.lecture.allowed}
                            />
                        </Item>

                               
                        <Item style={{height: 70, borderColor: "transparent", paddingBottom: 0, marginBottom: 0}} underline={false}>
                            <Icon type="MaterialIcons" name='description' />
                            <Text style={styles.font}>Description</Text>
                        </Item>
                        <Item style={{marginBottom: 20}}>
                            <Textarea
                                style={{height: 200, paddingTop: 0, marginTop: 0, flex: 1}}
                                rowSpan={5}
                                bordered
                                onChangeText={(description) => this.setState({description})}
                                placeholder="Write more about the lecture"
                                placeholderTextColor="#ccc5c5"
                                value={this.state.lecture.description}
                            />
                        </Item>
                        <Button
                            onPress={() => this.EditLecture()}
                            style={{flexDirection: "row", backgroundColor: '#fdeed1'}}
                            block light
                        >
                            <Text style={styles.font}>Edit Lecture</Text>
                            {this.state.isLoading && (
                                <ActivityIndicator size="small" color="#000000" />
                            )}
                        </Button>
                    </Form>
            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
      },
    put: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      textinput: {
        marginTop: 30,
        backgroundColor: '#DDDDDD',
        height: 40,
        width: 200
      },
    all:{
        padding:20,
        backgroundColor: '#f1f1f1',
    },
    container:{
        backgroundColor: '#fff',
        flex: 1,
        padding: 10
    },
    content:{
        flexDirection: 'row',
        marginBottom:25,
    },
    contentDescription:{
    },
    input:{
        width: 200,
        padding: 10,
        height:30,
        borderRadius: 5,
        position: 'absolute',
        right: 0,
    },
    inputDescription:{
        width: 300,
        padding: 10,
        height:120,
        borderRadius: 5,
        marginTop: 7
    },
    inputText:{
        color: '#918f8f',
        fontSize: 14,
    },
    date:{
        position: 'absolute',
        right: 15,
    },
    button:{
        backgroundColor: '#6483f7',
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    font:{
        fontFamily: "Pangolin-Regular",
    },
    time: {
        width: 100
      },
});
