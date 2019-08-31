import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, StatusBar, SafeAreaView, ScrollView, Image, FlatList, ListItem, Dimensions } from 'react-native'
import { Icon, Button } from 'react-native-elements'



export default class main extends Component {


    render() {

        return (
            <Fragment>

                <StatusBar backgroundColor='#F9F9F9' barStyle='dark-content'></StatusBar>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                    {/* HEADER */}

                    <View style={{ height: 50, backgroundColor: '#F9F9F9', flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 15,elevation:2,

}}>


                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', top: -8 }}>


                            <Image
                                source={require('../assets/camera.png')}
                                style={{ resizeMode: 'contain', height: 26, top: 6 }}
                            />


                            <Image
                                source={require('../assets/instagtam-logo.png')}
                                style={{
                                    width: 110, height: 40, position: 'absolute', left: '50%', transform: [{ translateX: -50 }]
                                }}
                            />

                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/igtv.png')}
                                    style={{ resizeMode: 'contain', height: 31, top: 5 }}
                                />

                                <Image
                                    source={require('../assets/dm.png')}
                                    style={{ resizeMode: 'contain', height: 22, top: 10 }}
                                />
                            </View>

                        </View>
                    </View>








                    {/* Main */}
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <ScrollView>


                        </ScrollView>
                    </View>








                    {/* FOOTER */}
                    <View
                        style={{
                            height: 65,
                            flexDirection: 'row',
                            paddingHorizontal: 30,

                            justifyContent: 'space-between',
                            // alignItems:"center",
                        }}>

                        <Image
                            source={require('../assets/home.png')}
                            style={{ resizeMode: 'contain', width: 30, top: 10 }}
                        />

                        <Image
                            source={require('../assets/search.png')}
                            style={{ resizeMode: 'contain', width: 30, top: 10 }}
                        />


                        <Image
                            source={require('../assets/add.png')}
                            style={{ resizeMode: 'contain', width: 30, top: 10 }}
                        />

                        <Image
                            source={require('../assets/heart.png')}
                            style={{ resizeMode: 'contain', width: 30, top: 10 }}
                        />

                        <Image
                            source={require('../assets/profile.png')}
                            style={{ resizeMode: 'contain', width: 30, top: 10 }}
                        />

                    </View>

                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({})
