import React, {Component} from 'react';
import {View, Text,AsyncStorage, TextInput, ToastAndroid,TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/index'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    componentWillReceiveProps(){
      this.setState({
        username:'',
        pwd:'',
        isloading:false
      })
    }
    userhandle=(text)=>{
        this.setState({
            username:text
        })
    }
    pwdhandle=(text)=>{
        this.setState({
            pwd:text
        })
    }
    login=()=>{
        if(this.state.username==''&&this.state.pwd==''){
          ToastAndroid.showWithGravity( "用户名、密码不能为空", ToastAndroid.SHORT, ToastAndroid.CENTER );
        }else{
          this.setState({isloading:true})
          myFetch.post('/login',{
              username:this.state.username,
              pwd:this.state.pwd
          }).then(res=>{
             AsyncStorage.setItem('user',JSON.stringify(res.data))
              .then(()=>{
                  Actions.homePage();
              })
          })
        }
        
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="check" color="red"/>
            <TextInput placeholder="密码" 
                secureTextEntry={true} 
                onChangeText={this.pwdhandle}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity  
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>Actions.join()}>
                <Text>注册</Text>
            </TouchableOpacity>
        </View>
        {
        this.state.isloading?<View style={{
          backgroundColor:'rgba(50,50,50,0.5)',
          position:"absolute",
          left:0,
          right:0,
          top:0,
          bottom:0,
          justifyContent:'center',
          alignItems:'center' 
        }}>
          <View style={{
            width:'50%',
            height:40,
            borderRadius:20,
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'    
          }}>
            <Text style={{color:'#fff'}}>正在跳转...</Text>
          </View>
        </View>:<View></View>
        }
      </View>
    );
  }
}
