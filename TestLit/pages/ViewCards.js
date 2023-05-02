//script:  ViewCards screen
//author:  Steven Motz and Ethan Lehutsky
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles';
import { AppContext } from '../AppContext';

const ViewCards = ({ navigation, route }) => {

  //Gets index from Navagation route
  const { index } = route.params;

  //Declare Functions 
  const {_deleteData, _addData,_retrieveData, listOfSets,setListOfSets} = useContext(AppContext);
    //Array where cards are stored
    const [Cards, setCards] = useState(listOfSets[index].cardList);
   


    //Removes whole deck from data array
    function deleteSet(){
     
      _deleteData(index);
      //delete set from storage
      alert('Set Deleted');
      navigation.navigate('Sets');
    }

    //Refresh Data
    useEffect(() => {
      _retrieveData();
    }, []); 

  return (
    <View style={styles.container}>

     
      <View style={styles.headerButtonLayout}>
      
      <View style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FlashCard', { index })}>
        <Text style={styles.cardText}>Flash Cards</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Test', { index })}>
        <Text style={styles.cardText}>Test</Text>
        </TouchableOpacity>
      </View>

      </View>

      <View style={styles.headerButtonLayout}>
      
      <View style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Edit', { index })}>
        <Text style={styles.cardText}>Edit</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.deleteHeaderButton}>
      <TouchableOpacity style={styles.button} onPress={() => deleteSet()}>
        <Text style={styles.cardText}>Delete</Text>
        </TouchableOpacity>
      </View>

      </View>


      <View>{
      <FlatList
      data={Cards}
      renderItem={({item}) => (
        <View style={styles.card}>
        <Text style={styles.cardText}>Q: {item.question}</Text>
        <Text style={styles.cardText}>A: {item.answer}</Text>
      </View>
      )}
      />

      }
          </View>
    </View>
  )
}

export default ViewCards