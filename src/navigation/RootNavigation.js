import React from 'react';
import { Provider } from 'react-redux';
import {Root} from "native-base";
import { createStore } from 'redux';
import { currentUser } from './../reducers';
import { createSwitchNavigator } from 'react-navigation';
import AuthStack from './authNavigation'
import AppStackStudent from './appNavigationStudent'
import AppStackTeacher from './appNavigationTeacher'

const RootStack= createSwitchNavigator(
    {
        AppStudent: AppStackStudent,
        AppTeacher: AppStackTeacher,
        Auth: AuthStack,
    },
);

const store = createStore(currentUser);

export default class RootNavigation extends React.Component {
    render() {
        return (
            <Root>
                <Provider store={store}>
                    <RootStack/>
                </Provider>
            </Root>
        );
    }
}
