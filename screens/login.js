import React, { Component,Fragment } from 'react'
import { Text, StyleSheet, View,StatusBar,SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'


export default class  extends Component {
    render() {
        return (
            <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex:1,backgroundColor:'#FFFFFF'}}>

            <View style={{}}> 

                <Text style={{color:'#7C7C7C'}}>English(United States)</Text>
                <Icon
  name='rowing' />
            </View>

            </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({})
