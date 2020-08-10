import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
//Platform and Backhandler utilized to make the android back button work. 
import { Platform, BackHandler, StyleSheet, Text, View } from 'react-native';
import { Provider, connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
//Root navigation stack that can nest 
//as many stack as we need. 
import { NavigationStack } from './navigation/nav_reducer';
//same old redux store
import store from './store'; 

class App extends Component {
  //When app is mounted, fire up an event listener for back events
  // if eventListener returns false, Back will NOT occur
  componentWillMount(){
    if (Platform.OS !== "android") return
    BackHandler.addEventListener("hardwareBackPress", () => {
      const {dispatch} = this.props;
      dispatch({ type: "Navigation/BACK"})
      return true
    })
  }

  //Remove listener once app is closed 
  componentWillUnmount(){
    if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress');
  }
 render(){
   //Install navigation helpers **CRITICAL**
   const { dispatch, nav } = this.props; 
   const navigation = addNavigationHelpers({
     dispatch, 
     state: nav
   })
   return <NavigationStack navigation = {navigation} />
 }
}

//mapping redux states to props 
const mapStateToProps = ({ nav }) => ({ nav })

const RootNavigationStack = connect(mapStateToProps)(App);

const Root = () => (
  <Provider store = {store}>
    <RootNavigationStack />
  </Provider>
)

export default Root; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
