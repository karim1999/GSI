import MyHomeScreen from "../screens/app/Home";
import Students from "../screens/app/Students";
import Search from "../screens/app/Search";
import { DrawerNavigator } from 'react-navigation'
import Color from '../constants/colors'
import drawerContentComponents from './drawerContentComponents ';

export default DrawerNavigator({
    Home:{ screen: MyHomeScreen },
    Register:{ screen: Students },
    Reports:{ screen: Search }

},{
    contentComponent: drawerContentComponents
},
)

