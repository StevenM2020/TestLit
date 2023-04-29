//script:  Edit Screen
//author:  Steven Motz
//date:    4/29/2023
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "../styles";

const Test = ({ navigation }) => {
  const [Cards, setCards] = useState([
    { question: "What is 1+1?", answer: "2" },
    { question: "What is 2+2?", answer: "4" },
    { question: "What is 3+3?", answer: "6" },
    { question: "What is 4+4?", answer: "8" },
    { question: "What is 5+5?", answer: "10" },
    { question: "What is 6+6?", answer: "12" },
  ]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isQuestion, setIsQuestion] = useState(false);
  const [cardValue, setCardValue] = useState(Cards[0].question);

  function updateAnswers(index, val) {
    Cards[index].answer = val;
    setCards(Cards);
    console.log(Cards[index].answer);
  }

  function deleteCard(index) {
    if (Cards.length > 1) setCards(Cards.filter((item, i) => i !== index));
    else alert("You must have at least one card!");
  }
  function addCard() {
    setCards([...Cards, { question: "New Question", answer: "New Answer" }]);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          {
            <FlatList
              data={Cards}
              renderItem={({ item, index }) => (
                <View style={styles.headerButtonLayout}>
                  <View style={styles.card}>
                    <Text style={styles.cardText}>Q: {item.question}</Text>
                    <TextInput
                      style={styles.cardText}
                      onChangeText={(val) => updateAnswers(index, val)}
                    >
                      {item.answer}
                    </TextInput>
                  </View>

                  <View style={styles.deleteButton}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => deleteCard(index)}
                    >
                      <Text style={styles.cardText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          }
        </View>

        <View style={styles.headerButtonLayout}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.button} onPress={() => addCard()}>
              <Text style={styles.cardText}>Create New Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Test;