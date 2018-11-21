import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Toast, Fab} from 'native-base';
import Color from '../../constants/colors';
import {RefreshControl, StyleSheet, AsyncStorage, TouchableOpacity, ActivityIndicator,Text,Platform} from "react-native";

export default class AppTemplate extends Component {

    render() {
        return (
            <Container>
                <Header hasTabs noShadow
                        style={{ backgroundColor: Color.mainColor }}
                        androidStatusBarColor={Color.mainColor}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>

                    <Body>
                        <Title>GSI</Title>
                    </Body>

                    <Right>
                        
                    <TouchableOpacity>
                        <Icon style={styles.butt} name='md-search' />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Icon style={styles.butt} name='md-cart' />
                    </TouchableOpacity>
                
                    </Right>
                </Header>
                
                <Content style={styles.content}>
                    { this.props.children }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    butt:{
        padding: 7,
        color: '#fff',
        fontSize: 23
    },
    content:{
        backgroundColor: Color.background,
        padding: 20,
    }

});