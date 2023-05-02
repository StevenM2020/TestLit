//script:  FlashCard screen
//author:  Steven Motz
//date:    4/28/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';
import { AppContext } from '../AppContext';

const FlashCard = ({ navigation, route }) => {
  
  const { index } = route.params;
  const {_deleteData, _addData,_retrieveData, listOfSets,setListOfSets} = useContext(AppContext);

    const [Cards, setCards] = useState(listOfSets[index]?.cardList);

   
    const [currentCard, setCurrentCard] = useState(0);
    const [isQuestion, setIsQuestion] = useState(true);
    const [cardValue, setCardValue] = useState(Cards[0].question);
    
// changes the current card after the user clicks the next or previous button
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

// changes the card value to the question or answer (flip card)
useEffect(() => {
  if(isQuestion){
    setCardValue(Cards[currentCard].question);
  }else{
    setCardValue(Cards[currentCard].answer);
  }
}, [isQuestion]);

  return (
    <View style={styles.container}>
      <Text>FlashCard</Text>

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

export default FlashCard