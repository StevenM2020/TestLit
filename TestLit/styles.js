import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001442',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: 20,
      width: 200,
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    },
    otherText: { 
      fontSize: 20,
      fontWeight: "bold"
    },
    card: {
        backgroundColor: '#002885',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        flex: 1,
    },
    cardText: {
        color: '#fff',
        fontSize: 20,
    },
    headerButtonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerButton: {
        backgroundColor: '#002885',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        flex: 1,
    },
    flashButtonContainer: {
        marginTop: 20,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


  });