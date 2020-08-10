import React, {Component} from 'react'; 
import { StyleSheet, View, Image, Text } from 'react-native';

// https://github.com/oblador/react-native-animatable
// this is a library you REALLY should be using
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'; 
import {initializeApp} from './login_actions'; 

class Splash extends Component {
    constructor(props){
        super(props); 
        this.state = {}
    }

    componentWillMount() {
        setTimeout(() => this.props.initializeApp(), 2000)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.authenticated) this.props.navigation.navigate('WeLoggedIn')
    }

    render(){
        const { container, image, text } = styles 

        return (
            <View style = {container}> 
                <Image 
                style = {image}
                source = {require('./logo.png')}
                />

                <Animatable.Text
                style={text}
                duration = {1500}
                animation="rubberBand"
                easing="linear"
                iterationCount="infinite"
                >
                    Loading...
                </Animatable.Text>

                <Text>{(this.props.authenticated) ? 'LOGGED IN' : 'NOT LOGGED IN'}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#F0F0F0"
    }, 
    image: {
        height: 110, 
        resizeMode: "contain", 
    },
    text: {
        marginTop: 50, 
        fontSize: 15, 
        color: "#1A1A1A"
    }
})