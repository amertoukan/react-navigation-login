import React, { Component } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'; 

//We pass in navigation 
const SignIn = ({ navigation }) => {
    return (
        <View> 
            <Text> Log In </Text>        
            
            <TouchableOpacity onPress = {() => navigation.goBack(null)}>
                <Text> Return to Sign Up.</Text>            
            </TouchableOpacity>   
        </View>
    )
}