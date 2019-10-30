import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image
    
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
const { width } = Dimensions.get('window')

class LogoTitle extends React.Component {
    render() {
      return (

<Image
          source={require('./assets/images/logo.jpg')}
          style={{ width: 50, height: 30 }}
        />

      );
    }
  }
class Login extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       headerTitle: () => <LogoTitle  />,
        
      };
    constructor(props) { 
        super(props); 
        this.state = { 
            checked:true,
            password: '',
            showPassword: true
        }; 
    }
 
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 25}}>
                    Login
                </Text>
                <Text style={{color: 'blue',textAlign:'right'}}
                 onPress={() => navigate('restorepassword')}>
                   Remember Password.
                 </Text>
                <View style={{marginTop:5, borderColor:'#8C8E90',borderBottomWidth:1,borderTopWidth:1,borderLeftWidth:1,borderRightWidth:1}}>
                <TextInput style={{borderColor:'#CCCDCE',borderBottomWidth:1}} placeholder='Email Address (Mobile Number)' />
                <TextInput 
                placeholder='Password'
                placeholderTextColor="gray"
                secureTextEntry={this.state.showPassword}
                onChangeText={(password) => this.setState({ password })}    
                       
                 />
                </View>
                <CheckBox
                title='Show Password'
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked,showPassword:!this.state.showPassword})}
                 />
                <View style={{margin:7}} />
                <TouchableOpacity
                   style={styles.button}
                onPress={this.onPress}
                   >
                <Text> Login </Text>
               </TouchableOpacity>
               <View style={styles.divider}>
  <View style={styles.hrLine} />
  <Text style={styles.dividerText}>I dont an account</Text>
  <View style={styles.hrLine} />
</View>
<View style={{margin:7}} />
                <TouchableOpacity
                   style={styles.button2}
                   onPress={() => this.props.navigation.navigate('Register')}
                   >
                <Text> Create New account </Text>
               </TouchableOpacity>
                  </ScrollView>
            );
    }
}
class Register extends Component{
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render(){
        return(
            <Text> Create New account</Text>

        );
    }
}

const RootStack=createStackNavigator(
    {
        Login,
        Register
    },
    {
        initialRouteName:'Login',
     
    },
    
);
const AppContainer=createAppContainer(RootStack);
export default class app extends Component{
    render(){
        return<AppContainer/>
    }
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#F7AB3D',
      padding: 10
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#D5D2CF',
        padding: 10
      },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
      },
      hrLine: {
        width: width / 4,
        backgroundColor: '#AFADAA',
        height: 1,
      },
      dividerText: {
        color: '#464544',
        textAlign: 'center',
       marginLeft:5,
       marginRight:5
      },
  })