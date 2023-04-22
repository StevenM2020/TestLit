//script:  FlashCard screen
//author:  Steven Motz
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

const FlashCard = ({ navigation }) => {
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
    
function getCard() {
    if(!isQuestion){
    setIsQuestion(true);
    return Cards[currentCard].question;
    }
    else{
    setCurrentCard(currentCard+1);
    setIsQuestion(false);
    return Cards[currentCard-1].answer;
    }
    }
  return (
    <View style={styles.container}>
      <Text>FlashCard</Text>

        <View style={styles.card}>
        <Text style={styles.cardText}>Q: {getCard()}</Text>
      </View>
          </View>

  )
}

export default FlashCard