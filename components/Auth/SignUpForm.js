import React, {Component} from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';

//this.props.navigation works without mapStateToProps
//some Wizardary ish 
class SignUp extends Component {
    render(){
        return (
            <View>
                <Text>Sign Up</Text>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Login')}
                >
                    <text> Go To Login Page</text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SignUp; 
