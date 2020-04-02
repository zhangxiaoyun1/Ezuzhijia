import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    TextInput,
    Image,
    Text,
    StatusBar,
  } from 'react-native';
  
  const {width,height} = Dimensions.get('window');
  const p=width/600;
  const h=height/1410;
export default class List extends Component {
    render() {
        return (
                
                    <View>
                        <View style={{
                            height:height*0.14,
                            padding:15,
                            paddingLeft:width*0.05,
                            backgroundColor:"#fff"
                        }}>
                            <View style={{
                                flexDirection:'row',
                                width:width*0.9,
                                height:50*p,
                                justifyContent:'space-between',
                                backgroundColor:'#eee',
                                borderRadius:5,
                                paddingLeft:10*p
                            }}>
                                <TextInput placeholder='请输入商品名称'/>
                                <Image style={{margin:10,width:20*p,height:20*h}} source={require('../imgs/sou.png')}/>
                            </View>
                            <View style={{
                                height:'60%',
                                flexDirection:'row',
                                justifyContent:'space-evenly',
                                flexWrap:'wrap',
                                alignItems:'center',
                                left:width*(-0.05),
                                width:width
                            }}>
                            <View><Text style={[styles.box1,{color:'red'}]}>综合</Text></View>
                            <View><Text style={styles.box1}>销量</Text></View>
                            <View><Text style={styles.box1}>新品</Text></View>
                            <View><Text style={styles.box1}>价格</Text></View>
                            <View><Text style={styles.box1}>销量</Text></View>
                        </View>
                        </View>
                        <ScrollView>
                        <View style={{
                            backgroundColor:'#f4f4f4',
                            flexDirection:'row',
                            justifyContent:'space-evenly',
                            paddingTop:10*h,
                            flexWrap:'wrap'
                        }}>
                            <View style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/04_03.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                            <View  style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/06_12.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                            <View style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/04_03.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                            <View style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/06_12.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                            <View style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/04_03.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                            <View style={styles.box2}>
                                <Image resizeMode="cover" style={styles.img} source={require('../imgs/06_12.jpg')}/>
                                <Text style={{color:'#666'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                <Text style={{color:'red',marginTop:10*h}}>36.00</Text>
                            </View>
                        </View>
                        <View style={{height:200*h}}></View>
                        </ScrollView>
                    </View>
                
        )
    }
}
const styles = StyleSheet.create({
    box1:{
      lineHeight:80*p,
      width:width*0.2,
      textAlign:'center',
      fontSize:16,
      fontSize:18
    },
    box2:{
      width:width*0.45,
      height:400*h,
      marginBottom:10*h,
      backgroundColor:'#fff',
      padding:10*p
    },
    img:{
      width:150*p,
      height:210*h,
      marginTop:40*h,
      marginLeft:15*p,
      marginBottom:15*h
    }
    
  });