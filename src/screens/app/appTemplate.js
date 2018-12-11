import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title,Card, Content, Toast, Fab} from 'native-base';
import Color from '../../constants/colors';
import {RefreshControl, StyleSheet, AsyncStorage, TouchableOpacity, ActivityIndicator,Text,Platform, Image} from "react-native";
import {connect} from "react-redux";
import { setUser } from "../../reducers";

class AppTemplate extends Component {

    render() {
        return (
            <Container>
                <Header hasTabs noShadow
                        style={{ backgroundColor: Color.mainColor }}
                        androidStatusBarColor={Color.mainColor}>
                    <Left>
                        <Button transparent onPress={ () =>  this.props.navigation.openDrawer() } >
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
                {
                    this.props.fab && (
                        <Fab
                            active={true}
                            style={{ backgroundColor: Color.mainColor }}
                            position="bottomRight"
                            onPress={() => this.props.navigation.navigate('AddLecture')}>
    
                            <Icon size={25} type="Ionicons" name="ios-add-outline" style={{color:'#FFFFFF'}}  />
                        </Fab>
                    )
                }
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
        padding:7
    }

});

const mapStateToProps = ({ user }) => ({
    user
});

const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppTemplate);
