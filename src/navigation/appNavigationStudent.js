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

const NotificationsStack = createStackNavigator({
    Notifications,

},{
    headerMode: 'none',
});

const ReportsStack = createStackNavigator({
    Students,

},{
    headerMode: 'none',
});

const SettingsStack = createStackNavigator({
    Payments,
},{
    headerMode: 'none',
});

const AppStackStudent = createMaterialTopTabNavigator (
    {
        HomeStack,
        NotificationsStack,
        ReportsStack,
        SettingsStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HomeStack') {
                    return <Icon name='home' style={{color: tintColor, fontSize: 30}} type="FontAwesome" />
                } else if (routeName === 'NotificationsStack') {
                    return <Icon name='notifications-none' style={{color: tintColor, fontSize: 30}} type="MaterialIcons" />
                }
                else if (routeName === 'ReportsStack') {
                    return <Icon name='news' style={{color: tintColor, fontSize: 30}} type="Entypo" />
                }
                else if (routeName === 'SettingsStack') {
                    return <Icon name='settings' style={{color: tintColor, fontSize: 25}} type="Feather" />
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Icon name={iconName} style={{color: tintColor, fontSize: 30}} type="Ionicons" />;
            },
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,

        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: '#000',
            inactiveTintColor: '#fff',
            tabStyle: {
                flex:1,
                width: '100%',
            },
            style: {
                backgroundColor: Color.mainColor,
            },
            indicatorStyle: {
                backgroundColor: Color.mainColor,
                height: 3
            }
        },

        initialRouteName: 'HomeStack',
    }
);
// const Main = "Main";
// const Register = "Register";
// export {Main, Register}
// var {height, width} = Dimensions.get('window')
// let routeConfig = {
//     Main: {
//         path: '/',
//         screen: MyHomeScreen
//     },
//     Register: {
//         path: '/',
//         screen: Students
//     }
// };

// let drawerNavigatorConfig = {
//     initialRouteName: Main,
//     drawerWidth: width/2,
//     drawerPosition: 'left',
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//     contentOptions: {
//         activeTintColor: 'red'
//     }
// };

// const App = DrawerNavigator(routeConfig, drawerNavigatorConfig);



export default AppStackStudent;