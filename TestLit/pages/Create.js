//script:  Create Screen
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

const Create = ({ navigation }) => {
  const [Cards, setCards] = useState([
    { question: "New Question", answer: "New Answer" },
  ]);

  // updates the answer at the given index
  function updateAnswers(index, val) {
    Cards[index].answer = val;
    setCards(Cards);
    console.log(Cards[index].answer);
  }

  // updates the question at the given index
  function updateQuestions(index, val) {
    Cards[index].question = val;
    setCards(Cards);
    console.log(Cards[index].question);
  }

    // removes the card at the given index
  function deleteCard(index) {
    if (Cards.length > 1) setCards(Cards.filter((item, i) => i !== index));
    else alert("You must have at least one card!");
  }

    // adds a new card to the end of the list
  function addCard() {
    setCards([...Cards, { question: "New Question", answer: "New Answer" }]);
  }

  // saves the set to the database and returns to the home screen
  function createSet() {
    // save the set to the database
    alert("Set Created!");
    navigation.navigate("Sets");
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
                  <TextInput
                      style={styles.cardText}
                      onChangeText={(val) => updateQuestions(index, val)}
                    >
                      {item.question}
                    </TextInput>
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
        <View style={styles.headerButtonLayout}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.button} onPress={() => createSet()}>
              <Text style={styles.cardText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create;
