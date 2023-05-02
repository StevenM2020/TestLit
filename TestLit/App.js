import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ViewCards from './pages/ViewCards';
import FlashCard from './pages/FlashCard';
import Test from './pages/Test';
import Edit from './pages/Edit';
import Create from './pages/Create';
import styles from './styles';
import { createContext } from 'react';
import { AppContext } from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

    
  const [listOfSets, setListOfSets] = useState([]);


  //Retrieves data from cardDeckz
  _retrieveData = async () => {
    try {
      const testArray = await AsyncStorage.getItem('cardDeckz');
      if (testArray !== null) {
        // We have data!!
        setListOfSets(JSON.parse(testArray));
      }
      //alert('retrieved')
    } catch (error) {
      alert(error);
    }
  };

  
   // Add Data to Array newDeck and calls _retrieveData()
   _addData = async (newDeck) => {
    try {

      const array = JSON.parse(await AsyncStorage.getItem('cardDeckz'))
      let newArray = [];
      if (array == null){
        newArray = [newDeck];
      }
      else{
        newArray = [...array, newDeck];
      }
      await AsyncStorage.setItem(
        'cardDeckz',
       JSON.stringify(newArray),
      );
      _retrieveData();
    } catch (error) {
      // Error saving data
      alert("added data: " + error);
    }
 
  };

  //Deletes data from an index in the Flatlist 
  _deleteData = async (index) => {
    try {

      const array = JSON.parse(await AsyncStorage.getItem('cardDeckz'))
      array.splice(index,1);

      await AsyncStorage.setItem(
        'cardDeckz',
       JSON.stringify(array),
      );
      _retrieveData();
    } catch (error) {
      // Error saving data
      alert(error);

    }
 
  };

  //Updates data by saving it into the deck, specified by the index
  _updateData = async (index, deck) =>{
    try {

      let array = JSON.parse(await AsyncStorage.getItem('cardDeckz'))
      array[index] = deck;

      await AsyncStorage.setItem(
        'cardDeckz',
       JSON.stringify(array),
      );
      _retrieveData();
    } catch (error) {
      // Error saving data
      alert(error);

    }

  };

  return (
    //Set above functions globally 
    <AppContext.Provider value = {{_updateData,_deleteData, _addData, _retrieveData, listOfSets, setListOfSets}}>

    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Sets" component={Home} />
      <Stack.Screen name="Cards" component={ViewCards} />
      <Stack.Screen name="FlashCard" component={FlashCard} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
    }</NavigationContainer>
    </AppContext.Provider>
  );
}

const Stack = createNativeStackNavigator(); 