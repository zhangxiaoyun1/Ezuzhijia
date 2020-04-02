import React, { Component } from 'react'
import { Text, View ,ToastAndroid,Dimensions} from 'react-native'
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height} = Dimensions.get('window');
const p=width/600;
const h=height/1410;
let pages=1;
export default class Reports extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            num:[],
            css:[]
        }
    }
    upload=()=>{
        let url = `https://cnodejs.org/api/v1/topics?limit=15&page=${pages}`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                var arr=[];
                var brr=[];
                for(var i=0;i<15;i++){
                    var tab=Math.ceil(Math.random()*10);
                    if(tab%2==0){
                     arr.push('已回复');
                     brr.push('#000');
                    }else{
                       arr.push('待回复');
                       brr.push('red');
                 }
             }
                this.setState({
                    data: res.data,
                    num:arr,
                    css:brr
                })
            })
    }
    componentDidMount(){
        this.upload();
    }
    reduce=()=>{
        if(pages==1){
            ToastAndroid.showWithGravity( "已到达第一页，不能再向前。", ToastAndroid.SHORT, ToastAndroid.CENTER );
        }else{
            pages--;
            this.upload();
        }
    }
    add=()=>{
        pages++;
        this.upload();
    }
    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5'}}>
                <View style={{padding:10*p,flexDirection:'row',justifyContent:'space-between',height:120*h,backgroundColor:'#f23030'}}>
                    <Icon onPress={()=>Actions.pop()} style={{marginTop:20*h}} size={28} color='#fff' name='angle-left'/>
                    <Text style={{color:'#fff',fontSize:24,textAlignVertical:'center'}}>我的发布</Text>
                    <Icon style={{marginTop:15*h}} size={28} color='#fff' name='ellipsis-h'/>
                </View>
                <View style={{padding:5*p}}>
                {this.state.data.map((item,index)=>(
                    <View style={{
                        flexDirection:'row',
                        height:45*h,
                        marginTop:20*h,
                        marginLeft:5*p,
                        justifyContent:'space-between'
                    }}>
                        <View style={{width:300*p}}>
                            <Text>{item.title.length>15?item.title.slice(0,15)+'...':item.title}</Text>
                        </View>
                        
                        <Text style={{marginLeft:100*p}}>{item.create_at.slice(0,10)}</Text>
                        <Text style={{color:this.state.css[index]}}>{this.state.num[index]}</Text>
                    </View>
                ))}
                <View style={{padding:10*p,marginTop:60*h,flexDirection:'row',justifyContent:'space-between'}}>
                    <Button
                     onPress={()=>{this.reduce()}}
                     style={{
                        width:150*p,
                        height:60*h,
                        backgroundColor:'red',
                        borderRadius:30*h,
                        color:'#fff',
                        textAlignVertical: 'center',
                    }}>上一页</Button>
                        <Text style={{marginTop:10*p}}>第{pages}页</Text>
                    <Button 
                     onPress={()=>this.add()}
                     style={{
                        width:150*p,
                        height:60*h,
                        backgroundColor:'red',
                        borderRadius:30*h,
                        color:'#fff',
                        textAlignVertical: 'center',
                    }}>下一页</Button>
                </View>
                </View>
            </View>
        )
    }
}
