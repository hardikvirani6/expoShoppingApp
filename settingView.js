import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, ScrollView, } from  'react-native';

export default class settingView extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flex:8}}>
                        <Text style={styles.headerText}>Setting</Text>
                    </View>
                    <View style={{flex:2, alignSelf:'center'}}>
                        <Image source={require('./images/settings.png')} style={styles.imgSetting}></Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.tableView}>
                        <Text style={styles.heading}>ACCOUNT</Text>
                        <Text style={styles.subHeading}>Log Out</Text>
                        <Text style={styles.heading}>COMPANY</Text>
                        <Text style={styles.subHeading}>About</Text>
                        <Text style={styles.subHeading}>Legal</Text>
                        <Text style={styles.subHeading}>Rate on the App Store</Text>
                        <Text style={styles.subHeading}>Server</Text>
                        <Text style={styles.heading}>PROFILE</Text>
                        <Text style={styles.subHeading}>Contact</Text>
                        <Text style={styles.subHeading}>Map</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    tableView: {
        backgroundColor: '#EFEFF4',
        flexDirection: 'column'
    },
    tableViewSection: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: '#0c65ab',
        flexDirection:"row"
    },
    heading: {
        paddingTop:10,
        paddingBottom:10,
        fontSize:18,
        color: '#77777c',
    },
    headerText:{
        color:'white',
        fontSize:22,
        alignSelf:'center',
        alignContent:'center',
        paddingTop:20,
        paddingBottom:20,
    },
    imgSetting:{
        height:30,
        width:30,
        alignSelf:'center',
        marginRight:10
    },
    subHeading: {
        paddingTop:15,
        paddingLeft:20,
        paddingBottom:15,
        fontSize:18,
        backgroundColor: '#ffffff',
        borderBottomWidth:1,
        borderBottomColor:'red'
    }

});