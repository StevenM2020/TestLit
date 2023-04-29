//script:  home screen
//author:  Steven Motz and Ethan Lehutsky
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const Home = ({ navigation }) => {
    const [listOfSets, setListOfSets] = useState([
        {key : '1', name: 'Addition', numCards: '27', question:['test ',' test2'], answer: ['test ',' test2']},
        {key : '2', name: 'Subtraction', numCards: '6', question: ['What is 2+2?'], answer: ['4']},
        {key : '3', name: 'Multiplication', numCards: '4', question: ['What is 3+3?'], answer: ['6']},
        {key : '4', name: 'Division', numCards: '2', question: ['What is 4+4?'], answer: ['8']},
        {key : '5', name: 'Fractions', numCards: '7', },
        {key : '6', name: 'Decimals', numCards: '3'},
        {key : '7', name: 'Percents', numCards: '1'},
        {key : '8', name: 'Exponents', numCards: '2'},
        {key : '9', name: 'Square Roots', numCards: '1'},
        {key : '10', name: 'Cubes', numCards: '1'},
        {key : '11', name: 'Square Roots', numCards: '1'},
        {key : '12', name: 'Cubes', numCards: '1'},
        {key : '13', name: 'Square Roots2', numCards: '1'},
    ]);
    const [Sets, setSets] = useState([]);

    _storeData = async () => {
      try {
        await AsyncStorage.setItem(
          '@MySuperStore:key',
          JSON.stringify(listOfSets),
        );
      } catch (error) {
        alert(error);
      }
    };

    _retrieveData = async () => {
      try {
        const testArray = await AsyncStorage.getItem('@MySuperStore:key');
        if (testArray !== null) {
          // We have data!!
          setSets(JSON.parse(testArray));
        }
      } catch (error) {
        alert(error);
      }
    };


    useEffect(() => {
      _storeData();
      _retrieveData();
    }, []); 

  return (
    <View style={styles.container}>
     
     


     <View style={styles.headerButtonLayout}>
    <View style={styles.card}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.cardText}>Create New Card</Text>
        </TouchableOpacity>
      </View>
            </View>


            
      <View>{
      <FlatList
       data={Sets}
      renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
        <View style={styles.card}>
        <Text style={styles.cardText}>Name: {item.name}</Text>
        <Text style={styles.cardText}>Number of cards: {item.numCards}</Text>
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
