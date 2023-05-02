//script:  home screen
//author:  Steven Motz and Ethan Lehutsky
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import { AppContext } from '../AppContext';

const Home = ({ navigation }) => {
    
    

const {_retrieveData, listOfSets} = useContext(AppContext);



    useEffect(() => {
      _retrieveData();
    }, []); 

  return (
    <View style={styles.container}>
     
     


     <View style={styles.headerButtonLayout}>
    <View style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.cardText}>Create New Card</Text>
        </TouchableOpacity>
      </View>
            </View>


            
      <View>{
      <FlatList
       data={listOfSets}
      renderItem={({item, index}) => (
      <TouchableOpacity onPress={() => navigation.navigate('Cards', { index })}>
        <View style={styles.card}>
        <Text style={styles.cardText}>Name: {item?.name}</Text>
        <Text style={styles.cardText}>Number of cards: {item?.numCards}</Text>
      </View>
      </TouchableOpacity>
      )}
      />

      
      /* 
      <ScrollView>
      {listOfSets.map((item) => {
        return (
          <View key={item.key} style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Number of cards: {item.numCards}</Text>
          </View>
        )})
      }
      </ScrollView> */}
          </View>
    </View>
  )
}

export default Home
