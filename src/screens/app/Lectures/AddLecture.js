import React, { Component } from 'react';
import {StyleSheet, View,} from 'react-native';
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

export default class AddLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            title: "",
            description: "",
            price: "",
            type: 1,
            category: 1,
            hours: "",
            img: "",
            video: "",
            center: "",
            address: "",
            date_start: "",
            product: 1,
            Products:[],
            selectedHours: 0,
            selectedMinutes: 0,

        };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
    
    render() {
        return (
            <AppTemplate>
                    <Form style={styles.container}>

                        <Item style={{height: 70}}>
                            <Icon type="SimpleLineIcons" name='tag' style={{fontSize:17}} />
                            <Text style={styles.font}>Name </Text>
                            <Input onChangeText={(title) => this.setState({title})}
                                   value={this.state.title}
                                   placeholder="ex: Phyiscs..."
                                   placeholderTextColor="#ccc5c5"
                            />
                        </Item>

                        <Item style={styles.lecture}>
                            <Icon type="FontAwesome" name="calendar" />
                            
                            <Text style={styles.lectureTxt}>From</Text>
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

                            <Text style={styles.lectureTxt}>To</Text>
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
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon name='md-time' />
                            <Text style={styles.lectureTxt}>From</Text>
                            <View style={styles.time}>
                                <TimePicker
                                selectedHours={this.selectedHours}
                                selectedMinutes={this.selectedMinutes}
                                onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                            />
                          </View>
                          <Text style={{paddingLeft:10, paddingRight:10}}>To</Text>
                            <View style={styles.time}>
                                <TimePicker
                                selectedHours={this.selectedHours}
                                selectedMinutes={this.selectedMinutes}
                                onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                            />
                          </View>
                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name='dollar' />
                            <Label style={styles.font}>Price </Label>
                            <Input onChangeText={(price) => this.setState({price})}
                                    value={this.state.price}
                                    keyboardType='numeric'
                                    placeholder="ex:20 $..."
                                    placeholderTextColor="#ccc5c5"
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

                        <Item style={{height: 70}}>
                            <Icon type="Foundation" name='book' />
                            <Text style={styles.font}>Course Type </Text>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.font}> College </Text>
                                <Radio style={{paddingRight: 20, paddingLeft: 8}}/>

                                <Text style={styles.font}>Genral</Text>
                                <Radio style={{paddingLeft: 8}}/>  
                            </View>

                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name="transgender" />
                            <Text style={styles.font}>Sex: </Text>

                            <View style={{flexDirection: 'row',  paddingLeft: 20}}>
                                <Icon type="FontAwesome" name='male' />
                                <Text style={styles.font}>Male</Text>
                                <Radio style={{paddingRight: 5, paddingLeft: 8}}/>

                                <Icon type="FontAwesome" name='female' />
                                <Text style={styles.font}>Female</Text>
                                <Radio style={{paddingLeft: 8}}/>  
                            </View>

                        </Item>

                        <Item style={{height: 70}}>
                            <Icon type="FontAwesome" name='users' />
                            <Text style={styles.font}>Students </Text>
                            <Input onChangeText={(price) => this.setState({price})}
                                    value={this.state.price}
                                    keyboardType='numeric'
                                    placeholder="ex:150 student..."
                                    placeholderTextColor="#ccc5c5"
                            />
                        </Item>

                        <Item style={{height: 120}}>
                            <Icon type="Feather" name='user-plus' />
                            <Text style={styles.font}>Add Student </Text>
                            <View style={{flex:1}}>
                                <Input onChangeText={(price) => this.setState({price})}
                                        value={this.state.price}
                                        placeholder="Name..."
                                        placeholderTextColor="#ccc5c5"
                                />
                                <Input onChangeText={(price) => this.setState({price})}
                                    value={this.state.price}
                                    keyboardType='numeric'
                                    placeholder="Phone number..."
                                    placeholderTextColor="#ccc5c5"
                            />
                            </View>
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
                                placeholder="Write more about the course"
                                placeholderTextColor="#ccc5c5"
                                value={this.state.description}
                            />
                        </Item>
                        <Button
                            onPress={() => this.addOrEdit()}
                            style={{flexDirection: "row", backgroundColor: '#fdeed1'}}
                            block light
                        >
                            <Text style={styles.font}>Add Lecture</Text>
                        </Button>
                    </Form>
            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
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

