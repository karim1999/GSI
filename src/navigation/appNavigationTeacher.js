import React from 'react';
import { SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {Icon, Text} from "native-base";
import MyHomeScreen from "../screens/app/Home";
import Lectures from "../screens/app/Lectures";
import AddLecture from "../screens/app/Lectures/AddLecture";
import LecturePayment from "../screens/app/Lectures/LecturePayment";
import Notifications from "../screens/app/Notifications";
import Search from "../screens/app/Search";
import ResultSearch from "../screens/app/Search/ResultSearch";
import CalendarSearch from "../screens/app/Search/CalendarSearch";
import Students from "../screens/app/Students";
import Teacher from "../screens/app/Teacher";
import Payments from "../screens/app/Teacher/Payments";
import Wallet from "../screens/app/Teacher/Wallet";
import Color from "../constants/colors";
import DrawerStack from "./DrawerNavigator"
import { createMaterialTopTabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation'

const HomeStack = createStackNavigator({
    DrawerStack,
    Lectures,
    AddLecture,
    LecturePayment,
    Search,
    ResultSearch,
    CalendarSearch,
},{
    headerMode: 'none',
});

const WalletStack = createStackNavigator({
    Teacher,
    Wallet,
},{
    headerMode: 'none',
});

const PaymentsStack = createStackNavigator({
    Payments,
},{
    headerMode: 'none',
});

const SettingsStack = createStackNavigator({
    Payments,
},{
    headerMode: 'none',
});

const AppStackTeacher = createMaterialTopTabNavigator (
    {
        HomeStack,
        WalletStack,
        PaymentsStack,
        SettingsStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HomeStack') {
                    return <Icon name='home' style={{color: tintColor, fontSize: 30}} type="FontAwesome" />
                } else if (routeName === 'WalletStack') {
                    return <Icon name='wallet' style={{color: tintColor, fontSize: 30}} type="Entypo" />
                }
                else if (routeName === 'PaymentsStack') {
                    return <Icon name='cash-multiple' style={{color: tintColor, fontSize: 30}} type="MaterialCommunityIcons" />
                }
                else if (routeName === 'SettingsStack') {
                    return <Icon name='settings' style={{color: tintColor, fontSize: 30}} type="MaterialIcons" />
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
            return <Image source={{uri:imageName}} />;
            },
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,

        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: Color.mainColor,
            inactiveTintColor: 'black',
            tabStyle: {
                flex:1,
                width: '100%',
            },
            style: {
                backgroundColor: 'white',
            },
            indicatorStyle: {
                backgroundColor: Color.mainColor,
                height: 3
            }
        },

        initialRouteName: 'HomeStack',
    }
);

export default AppStackTeacher;