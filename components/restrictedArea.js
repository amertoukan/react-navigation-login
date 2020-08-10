import React, { Component } from 'react'
//Example of how to use HOC 
import requireAuth from '../HOC/require_auth';
import { connect } from 'react-redux';
import { View } from 'react-native-animatable';

class RestrictedArea extends Component {
    //... normal component
    <View>
        <Text>Restricted Area</Text>
    </View>
}

//mapStateToProps
const mapStateToProps = (state => console.log(state))
export default connect(mapStateToProps)(requireAuth(RestrictedArea))