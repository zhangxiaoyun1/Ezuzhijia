import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity,StyleSheet,AsyncStorage} from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'
import { Slider } from '@ant-design/react-native';
export default class SwiperPage extends Component {
    start=()=>{
        AsyncStorage.setItem('isInstall','true');
        this.props.afterInstall();
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Swiper activeDotColor='red'>
                        <View style={styles.slider1}>
                            <Image style={styles.img} source={require('../imgs/l01.jpg')}/>
                        </View>
                        <View style={styles.slider1}>
                            <Image style={styles.img} source={require('../imgs/l02.jpg')}/>
                        </View>
                        <View style={styles.slider1}>
                            <Image style={styles.img} source={require('../imgs/l03.jpg')}/>
                            <TouchableOpacity onPress={this.start} style={styles.start}><Text style={{color:'#fff'}}>开始体验</Text></TouchableOpacity>
                        </View>
                </Swiper>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   
    img:{
        width:'100%',
        height:'100%'
    },
    slider1:{
        flex:1,
        height:'100%',
        width:'100%', 
        alignItems:'center',
    },
    start:{
        bottom:150,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        backgroundColor:'red',
        borderRadius:20,
    }
})