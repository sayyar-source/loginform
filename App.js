import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    Dimensions
    
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
const { width } = Dimensions.get('window')
class Login extends Component {
    static navigationOptions = {
        title: 'Login',
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
                   Şifremi unuttum.
                 </Text>
                <View style={{marginTop:5, borderColor:'#8C8E90',borderBottomWidth:1,borderTopWidth:1,borderLeftWidth:1,borderRightWidth:1}}>
                <TextInput style={{borderColor:'#CCCDCE',borderBottomWidth:1}} placeholder='E-posta adresi (mobil hesaplar için telefon no.)' />
                <TextInput 
                placeholder='şifre'
                placeholderTextColor="gray"
                secureTextEntry={this.state.showPassword}
                onChangeText={(password) => this.setState({ password })}    
                       
                 />
                </View>
                <CheckBox
                title='Şifreyi göster'
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked,showPassword:!this.state.showPassword})}
                 />
                <View style={{margin:7}} />
                <TouchableOpacity
                   style={styles.button}
                onPress={this.onPress}
                   >
                <Text> Giriş yap </Text>
               </TouchableOpacity>
               <View style={styles.divider}>
  <View style={styles.hrLine} />
  <Text style={styles.dividerText}>Amazon hesabiniz yok mu?</Text>
  <View style={styles.hrLine} />
</View>
<View style={{margin:7}} />
                <TouchableOpacity
                   style={styles.button2}
                   onPress={() => this.props.navigation.navigate('Register')}
                   >
                <Text> Yeni bir Amazon hesabi oluşturun </Text>
               </TouchableOpacity>
                  </ScrollView>
            );
    }
}
class Register extends Component{
    static navigationOptions = {
        title: 'Register',
      };
    render(){
        return(
            <Text> yeni hesap acma</Text>

        );
    }
}

const RootStack=createStackNavigator(
    {
        Login,
        Register
    },
    {
        initialRouteName:'Login'
    }
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