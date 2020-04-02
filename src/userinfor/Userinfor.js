import React, { Component } from 'react'
import { View, Text ,Image,Dimensions,AsyncStorage,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
const {width,height} = Dimensions.get('window');
const p=width/600;
const h=height/1410;
const options = {
    title: '上传头像',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片',
    customButtons: [{ name: 'fb', title: '从相册中选择' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class My extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('userimg')
        .then((res)=>{
            if(res !== null){
                this.setState({
                    imgUrl:JSON.parse(res)
                });
            }else{
                this.setState({
                    imgUrl:require('../imgs/user.jpg')
                });
            }
        })
    }
    login=()=>{
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('userimg');
        Actions.replace('login');
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
              const source = { uri: response.uri };
              AsyncStorage.setItem('userimg',JSON.stringify(source),
                    ()=>{console.log('store success')}
                )
              this.setState({
                imgUrl: source,
              });
            }
          });
    }
    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',height:height}}>
                <View style={{
                    height:300*h,
                    backgroundColor:'#f23030',
                }}>
                    <View style={{
                            width:100*p,
                            height:130*h,
                            marginTop:60*h,
                            marginLeft:240*p,
                            borderRadius:65,
                            overflow:'hidden'
                        }}>
                            <Button
                                onPress={()=>{this.takephoto()}}
                            >
                                <Image 
                                    resizeMode='cover'
                                    style={{
                                    width:110*p,
                                    height:130*h
                                }} source={this.state.imgUrl}/>
                            </Button>
                    </View>
                    <Text style={{
                        color:'#fff',
                        fontSize:20,
                        marginLeft:200*p
                    }}>BINNU DHILLON</Text>
                </View>
                <View style={{backgroundColor:'#fff',height:460*h}}>
                    <View style={{
                        borderBottomWidth:2,
                        borderBottomColor:'#f5f5f5',
                        height:90*h,
                        padding:13*p,
                        flexDirection:'row',
                        justifyContent:'flex-start'
                    }}>
                        <Icon size={28} color='#5b5a5a' name='user-o'/>
                        <Text style={{marginLeft:20*p,marginTop:5*h,fontSize:16,color:'#5b5a5a'}}>我的个人中心</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='gear'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>账户管理</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='map-marker'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>收货地址</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='vcard-o'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的信息</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='file-text'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的订单</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='qrcode'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的二维码</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='database'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的积分</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='star-o'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的收藏</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#fff',height:340*h,marginTop:5*h}}>
                    <View style={{
                        borderBottomWidth:2,
                        borderBottomColor:'#f5f5f5',
                        height:90*h,
                        padding:13*p,
                        flexDirection:'row',
                        justifyContent:'flex-start'
                    }}>
                        <Icon size={28} color='#5b5a5a' name='tag'/>
                        <Text style={{marginLeft:20*p,marginTop:5*h,fontSize:16,color:'#5b5a5a'}}>E族活动</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='wrench'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>居家维修保养</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='car'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>出行接送</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='user-o'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的收益人</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='bed'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的住宿优惠</Text>
                        </View>
                        <View style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon size={28} color='#aeaeae' name='glass'/>
                            <Text style={{color:'#5b5a5a',marginTop:5*h}}>我的活动</Text>
                        </View>
                        <View onPress={()=>Actions.reports()} style={{width:width*0.33,height:120*h,padding:10*p,justifyContent:'center',alignItems:'center'}}>
                            <Icon onPress={()=>Actions.reports()} size={28} color='#aeaeae' name='file-o'/>
                            <Text onPress={()=>Actions.reports()} style={{color:'#5b5a5a',marginTop:5*h}}>我的发布</Text>
                        </View>
                    </View>
                </View>
                <Button
                        style={{
                            width:500*p,
                            height: 70*h,
                            borderRadius: 20*h,
                            textAlignVertical: 'center',
                            backgroundColor:'red',
                            color: '#fff',
                            marginTop:45*h,
                            marginLeft:width*0.08
                        }}
                        onPress={this.login}
                    >退出登录</Button>
            </View>
        )
    }
}

