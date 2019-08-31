import React, { Component,Fragment } from 'react'
import { Text, StyleSheet, View,StatusBar,SafeAreaView,TouchableOpacity } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { Input,Button } from 'react-native-elements';

export default class  extends Component {
    logo = require('../assets/instagtam-logo.png')

    render() {
        return (
            <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex:1,backgroundColor:'#FFFFFF'}}>

            <View style={{flexDirection:'row',padding:10,justifyContent:"center"}}> 

                <Text style={{color:'#7C7C7C', fontSize:17,fontWeight:'600'}}>English(United States)</Text>
                <Icon color='#7C7C7C'type='font-awesome' name='chevron-down' size={15} containerStyle={{top:3,left:5}}/>
            </View>

            <Image source={this.logo} style={{width:250,height:90,alignSelf:'center',marginTop:100}}></Image>

            <View style={{alignItems:"center" , marginTop:60 ,width:'86%' ,alignSelf:"center"}}>
            <Input placeholder='Email' containerStyle={{borderColor:'#DCDCDC',backgroundColor:'#FAFAFA',borderWidth:1,borderRadius:5,marginBottom:20}} inputContainerStyle={{borderBottomWidth:0,padding:8}}/>
            <Input placeholder='Password' containerStyle={{borderColor:'#DCDCDC',backgroundColor:'#FAFAFA',borderWidth:1,borderRadius:5}} inputContainerStyle={{borderBottomWidth:0,padding:8}}/>

            <Button
  title="Login"
  containerStyle={{width:'100%',marginTop:30}}
/>

<View style={{flexDirection:'row', marginTop:20}}>
<Text style={{color:'#9DA1A5',fontSize:14,fontWeight:'500'}}>Forgot your login details? 

</Text>
<TouchableOpacity>
<Text style={{fontWeight:'700',color:'#9DA1A5', fontSize:14}}> Get help signing in.</Text>
</TouchableOpacity>

</View>

<View style={{borderBottomWidth:1,borderBottomColor:'#C9C9C9',width:'100%',height:10,marginTop:30}}>
            <Text style={{position:"absolute",backgroundColor:'white',paddingHorizontal:10,alignSelf:"center",fontSize:18,fontWeight:'600',color:'#999999'}}> OR</Text>
</View>

        <Button
         icon={
    <Icon
      name="facebook"
      type='font-awesome'
      size={25}
      color="white"
      containerStyle={{top:2}}

    />
  }
  title="  Login with Facebook"
  color="white"
  containerStyle={{width:'100%',marginTop:30}}
/>

</View>
            </SafeAreaView>

            <View style={{heigh:100,padding:35,paddingTop:20,shadowColor: "#000",flexDirection:'row',justifyContent:'center',

alignItems:"center",
borderTopWidth:1,
borderTopColor:'#C9C9C9'

}}>
                <Text style={{color:'#9DA1A5',fontSize:16,fontWeight:'600'}}>Don't have an account? 
              
                </Text>
                <TouchableOpacity><Text style={{color:'#9DA1A5',fontSize:16,fontWeight:'700'}}> Sign up.</Text></TouchableOpacity>

            </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({})
