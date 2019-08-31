import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, StatusBar, SafeAreaView, ScrollView, Image, FlatList, ListItem, Dimensions, TouchableOpacity } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { thisExpression } from '@babel/types';



export default class main extends Component {

    footerIcons = [
        require('../assets/home.png'),
        require('../assets/search.png'),
        require('../assets/add.png'),
        require('../assets/heart.png'),
        require('../assets/profile.png')
    ]

    


    Header = (props) => {
        return (
            <View style={{
                height: 55, backgroundColor: '#F9F9F9', flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 15, elevation: 2,

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
        )
    }

    Footer = () => {
        return (
            <View
                style={{
                    height: 65,
                    flexDirection: 'row',
                    paddingHorizontal: 30,

                    justifyContent: 'space-between',
                    // alignItems:"center",
                }}>

                {/* <Image
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
                        /> */}

                {this.footerIcons.map((img, key) => {

                    return (
                        <TouchableOpacity key={key}>
                            <Image

                                source={img}
                                style={{ resizeMode: 'contain', width: 30, top: 10 }}
                            />
                        </TouchableOpacity>
                    )
                })}

            </View>
        )
    }


    render() {

        return (
            <Fragment>

                <StatusBar backgroundColor='#F9F9F9' barStyle='dark-content'></StatusBar>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                    {/* HEADER */}

                    <this.Header />




                    {/* Main */}
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <ScrollView>


                            <View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Image
                                            source={require('../assets/i.jpg')}
                                            style={{ resizeMode: 'cover', width: 30, height: 30, borderRadius: 15, shadowOpacity: 0.3, shadowRadius: 20 }}
                                        />
                                        <Text style={{ marginLeft: 5, fontWeight: '600' }}> instagram</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/3dots.png')}
                                            style={{ resizeMode: 'contain', width: 20 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Image
                                        source={require('../assets/mountain.jpg')}
                                        style={{ width: '100%', height: 280 }}
                                    />
                                </View>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", width: 110 }}>

                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/heart.png')}
                                                style={{ resizeMode: 'contain', width: 25 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/comment.png')}
                                                style={{ resizeMode: 'contain', width: 25 }}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/dm.png')}
                                                style={{ resizeMode: 'contain', width: 25 }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/save.png')}
                                            style={{ resizeMode: 'contain', width: 25 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{ paddingHorizontal: 12, fontWeight: '600' }}>732,398 likes</Text>
                                    <Text style={{ paddingHorizontal: 12, fontWeight: '600', marginTop: 5 }}>instagram

                                    <Text style={{ fontWeight: '400' }}> Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb.</Text>
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{ paddingHorizontal: 12, fontWeight: '400', marginTop: 6, color: '#b3b3b3', fontSize: 15 }}>View all 4,755 comments</Text>
                                    </TouchableOpacity>
                                    <Text style={{ paddingHorizontal: 12, fontWeight: '400', marginTop: 6, color: '#b3b3b3', fontSize: 12 }}>16 hours ago</Text>

                                </View>

                            </View>

                        </ScrollView>
                    </View>





                    {/* FOOTER */}
                    <this.Footer />

                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({})
