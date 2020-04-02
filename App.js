/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Dimensions, BackHandler, ToastAndroid,AsyncStorage} from 'react-native';
import {Router,Scene,Tabs,Overlay, Lightbox,Modal, Stack, Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/home/Home'
import Goods from './src/goods/Goods'
import User from './src/userinfor/Userinfor'
import SplashScreen from 'react-native-splash-screen'
import Login from './src/common/Login';
import Join from './src/common/Join';
import SwiperPage from './src/common/SwiperPage';
import Reports from './src/userinfor/Reports';
console.disableYellowBox=true;
const {width,height} = Dimensions.get('window');

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now=0;
  let init=()=>{
    AsyncStorage.getItem('isInstall')
    .then(res=>{
        if(res){
            setInstall(false);
        }
    })
      AsyncStorage.getItem('user')
      .then(res=>{
          let user=JSON.parse(res);
          if(user&&user.token){
              setLogin(true);
              SplashScreen.hide();
          }
          if(!user){
            // setLogin(false);
            SplashScreen.hide();
          }
      })
  }
  useEffect(() => {
    // AsyncStorage.clear();
    init();
  },[])
  let afterInstall =()=>{
      setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1,height:height,width:width}}>
      <SwiperPage afterInstall={afterInstall}/>
    </View>
  }
  return (
    <Router
        backAndroidHandler={()=>{
            if(Actions.currentScene !='home'&&Actions.currentScene !='login'){
                Actions.pop();
                return true;
            }else{
                if(new Date().getTime()-now<200){
                    BackHandler.exitApp();
                }else{
                    ToastAndroid.show('确定要退出吗',100);
					now = new Date().getTime();
					return true;
                }
            }
        }}
    >
        <Overlay>
        <Modal key='modal'hideNavBar>
            <Lightbox key='ligthbox'>
                <Scene key="root">
                    <Tabs key='tabbar'
                        hideNavBar  
                        activeTintColor='red'
                        inactiveTintColor='#808080'
                    >
                        <Stack key='homePage'
                            hideNavBar 
                            title='首页'
                            icon={({focused})=><Icon color={focused ? "red" : "#808080"} size={25} name="home" />}
                        >
                            <Stack key='home' component={Home}/>
                        </Stack>
                        <Stack key='msg'
                            hideNavBar 
                            title='商品'
                            icon={({focused})=><Icon color={focused ? "red" : "#808080"} size={25} name="th-large" />}
                        >
                            <Scene key='goods' component={Goods}/>
                        </Stack>
                        <Stack key='doc' title='个人中心' 
                               hideNavBar
                               icon={({focused})=><Icon color={focused ? "red" : "#808080"} size={25} name="user-o" />}
                        >
                            <Scene key='user' component={User}/>
                            <Scene hideTabBar hideNavBar  key='reports' component={Reports}/>
                        </Stack>
                    </Tabs>
                </Scene>
            </Lightbox>
            <Scene key='join' component={Join}/>
            <Scene key='login' initial={isLogin?false:true} component={Login}/>
        </Modal>
        </Overlay> 
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
