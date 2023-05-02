//script:  Edit Screen
//author:  Steven Motz and Ethan Lehutsky
//date:    4/29/2023
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
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
import { AppContext } from "../AppContext";

const Test = ({ navigation, route  }) => {
  //Saves index from route
  const { index } = route.params;
  //Declare Functions 
  const {_updateData, _deleteData, _addData,_retrieveData, listOfSets,setListOfSets} = useContext(AppContext);

    //Card Array
    const [Cards, setCards] = useState(listOfSets[index]?.cardList);

  // updates the answer at the given index
  function updateAnswers(index, val) {
    let tempCards = Cards
    tempCards[index].answer = val
    setCards(tempCards);
    console.log(tempCards[index].answer);
  }

  // updates the question at the given index
  function updateQuestions(index, val) {
    let tempCards = Cards
    tempCards[index].question = val
    setCards(tempCards);
    console.log(Cards[index].question);
  }

    // removes the card at the given index
  function deleteCard(index) {
    if (Cards.length > 1) setCards(Cards.filter((item, i) => i !== index));
    else alert("You must have at least one card!");
  }

    // adds a new card to the end of the list
  function addCard() {
    setCards(prevCards => [...prevCards, { question: "New Question", answer: "New Answer" }]);
  }

  //Updates the Deck of cards
  function updateSet() {
    
    _updateData(index, {
      name: listOfSets[index]?.name,
      numCards: Cards.length,
      cardList: Cards
    });
    // save the set to the database
    //alert("Set Updated!");
    navigation.navigate("Sets", { index });
    setCards([]);
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
            <TouchableOpacity style={styles.button} onPress={() => updateSet()}>
              <Text style={styles.cardText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Test;
