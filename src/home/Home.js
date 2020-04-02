import React, { Component } from 'react'
import { View, Text,Dimensions,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
const {width,height} = Dimensions.get('window');
const p=width/600;
const h=height/1410;
export default class Home extends Component {
    render() {
        return (
            <View>
                <View style={{
                    height:height*0.08,
                    padding:15,
                    paddingLeft:width*0.05,
                    backgroundColor:"#f23030",
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <View style={{
                        flexDirection:'row',
                        width:width*0.85,
                        height:60*h,
                        justifyContent:'flex-start',
                        backgroundColor:'#fff',
                        opacity:0.5,
                        borderRadius:20,
                        paddingLeft:10*p
                    }}>
                        <Icon style={{marginTop:5*h,color:"#fff"}} size={22} name='search'></Icon>
                        <TextInput placeholderTextColor='#fff' style={{marginBottom:-5*h,fontSize:15,marginLeft:10*p}} placeholder='请输入您要搜索的关键字'/>
                    </View>
                    <Icon style={{marginTop:5*h}} size={25} color={"#fff"} name='shopping-cart'/>
                </View>  
                <View style={{height:height*0.25,backgroundColor:'red'}}>
                    <Swiper autoplay activeDotColor='red'>
                        <View>
                            <Image style={{width:'100%',height:'100%'}} source={require('../imgs/lun_02.jpg')}/>
                        </View>
                        <View>
                            <Image style={{width:'100%',height:'100%'}} source={require('../imgs/lun_02.jpg')}/>
                        </View>
                        <View>
                            <Image style={{width:'100%',height:'100%'}} source={require('../imgs/lun_02.jpg')}/>
                        </View>
                    </Swiper>
                </View>  
                <View style={{backgroundColor:'#f5f5f5'}}>
                    <View style={{height:height*0.1,marginTop:15*h,backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start'}}>
                        <Image style={{height:'100%',width:100*p,marginLeft:10*p}} source={require('../imgs/j01_05.jpg')}/>
                        <Text style={{marginLeft:50*p,fontSize:20,marginTop:45*h,color:'#9a9a9a',fontWeight:'100'}}>居家维修保养</Text>
                        <Icon color="#cecece" size={24} style={{marginLeft:223*p,marginTop:45*h}} name='chevron-right'/>
                    </View>
                    <View style={{height:height*0.1,marginTop:15*h,backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start'}}>
                        <Image style={{height:'100%',width:100*p,marginLeft:10*h}} source={require('../imgs/j02_09.jpg')}/>
                        <Text style={{marginLeft:50*p,fontSize:20,marginTop:45*h,color:'#9a9a9a',fontWeight:'100'}}>住宿优惠</Text>
                        <Icon color="#cecece" size={24} style={{marginLeft:280*p,marginTop:45*h}} name='chevron-right'/>
                    </View>
                    <View style={{height:height*0.1,marginTop:15*h,backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start'}}>
                        <Image style={{height:'100%',width:100*p,marginLeft:10*p}} source={require('../imgs/j03_11.jpg')}/>
                        <Text style={{marginLeft:50*p,fontSize:20,marginTop:45*h,color:'#9a9a9a',fontWeight:'100'}}>出行接送</Text>
                        <Icon color="#cecece" size={24} style={{marginLeft:280*p,marginTop:45*h}} name='chevron-right'/>
                    </View>
                    <View style={{height:height*0.1,marginTop:15*h,backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start'}}>
                        <Image style={{height:'100%',width:100*p,marginLeft:10*h}} source={require('../imgs/j04_13.jpg')}/>
                        <Text style={{marginLeft:50*p,fontSize:20,marginTop:45*h,color:'#9a9a9a',fontWeight:'100'}}>E族活动</Text>
                        <Icon color="#cecece" size={24} style={{marginLeft:293*p,marginTop:45*h}} name='chevron-right'/>
                    </View>
                </View>  
                <Button
                 style={{
                        width:500*p,
                        height: 70*h,
                        borderRadius: 5,
                        textAlignVertical: 'center',
                        backgroundColor:'red',
                        color: '#fff',
                        marginTop:45*h,
                        marginLeft:width*0.08
                }}>发布需求</Button>  
                <Text style={{
                    fontSize:10,
                    marginTop:30*h,
                    color:'#9a9a9a',
                    textAlign:'center'
                }}>E族之家 版权所有</Text>
            </View>
        )
    }
}
