//script:  ViewCards screen
//author:  Steven Motz
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles';

const ViewCards = ({ navigation }) => {
    const [Cards, setCards] = useState([
    //     {key : '1', question: 'What is 1+1?', answer: '2'},
    //     {key : '2', question: 'What is 2+2?', answer: '4'},
    //     {key : '3', question: 'What is 3+3?', answer: '6'},
    //     {key : '4', question: 'What is 4+4?', answer: '8'},
    //     {key : '5', question: 'What is 5+5?', answer: '10'},
    //     {key : '6', question: 'What is 6+6?', answer: '12'},
    ]);
    _retrieveData = async () => {
      try {
        const testArray = await AsyncStorage.getItem('@MySuperStore:key');
        if (testArray !== null) {
          // We have data!!
          setCards(JSON.parse(testArray));
        }
      } catch (error) {
        alert(error);
      }
    };
    useEffect(() => {
      _retrieveData();
    }, []); 

  return (
    <View style={styles.container}>
      <Text>ViewCards</Text>

     
      <View style={styles.headerButtonLayout}>
      
      <View style={styles.card}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FlashCard')}>
        <Text style={styles.cardText}>Flash Cards</Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.card}>
        <Text style={styles.cardText}>Test</Text>
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