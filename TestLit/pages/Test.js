//script:  Test Screen
//author:  Steven Motz
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

const Test = ({ navigation }) => {
    const [Cards, setCards] = useState([
        {question: 'What is 1+1?', answer: '2'},
        {question: 'What is 2+2?', answer: '4'},
        {question: 'What is 3+3?', answer: '6'},
        {question: 'What is 4+4?', answer: '8'},
        {question: 'What is 5+5?', answer: '10'},
        {question: 'What is 6+6?', answer: '12'},
    ]);
    const [currentCard, setCurrentCard] = useState(0);
    const [isQuestion, setIsQuestion] = useState(false);
    const [cardValue, setCardValue] = useState(Cards[0].question);

useEffect(() => {
  if(currentCard >= Cards.length){
    setCurrentCard(0);
    setCardValue(Cards[0].question);
  }else if(currentCard < 0){
    setCurrentCard(Cards.length-1);
    setCardValue(Cards[Cards.length-1].question);
  }else{
    setCardValue(Cards[currentCard].question);
  }
  
}, [currentCard]);

useEffect(() => {
  if(isQuestion){
    setCardValue(Cards[currentCard].question);
  }else{
    setCardValue(Cards[currentCard].answer);
  }
}, [isQuestion]);

  return (
    <View style={styles.container}>
      <Text>Test</Text>

        <View style={styles.card}>
        <Text style={styles.cardText}>{isQuestion?"Q":"A"}: {cardValue}</Text>
      </View>

      <View style={styles.flashButtonContainer}>
        <Button title="Last Card" onPress={() => {setCurrentCard(currentCard-1)} }/>
        <Button title="Flip Card" onPress={() => {setIsQuestion(!isQuestion)} }/>
        <Button title="Next Card" onPress={() => {setCurrentCard(currentCard+1)} }/>
      </View>
          </View>

  )
}

export default Test