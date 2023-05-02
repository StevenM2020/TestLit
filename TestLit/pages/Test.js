//script:  Test Screen
//author:  Steven Motz
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

const Test = ({ navigation, route }) => {

  const { index } = route.params;
  const {_deleteData, _addData,_retrieveData, listOfSets,setListOfSets} = useContext(AppContext);

  const [Cards, setCards] = useState(listOfSets[index]?.cardList);

  const [currentCard, setCurrentCard] = useState(0);
  const [isQuestion, setIsQuestion] = useState(false);
  const [cardValue, setCardValue] = useState(Cards[0].question);
  const [userAnswer, setUserAnswer] = useState(["", "", "", "", "", ""]);

  // updates the userAnswer array with the user's answer
  function updateAnswers(index, val) {
    userAnswer[index] = val;
    setUserAnswer(userAnswer);
    console.log(userAnswer);
  }

  // checks the user's answers against the correct answers and displays the results
  function checkAnswers() {
    var correct = 0;
    for (var i = 0; i < Cards.length; i++) {
      if (userAnswer[i] == Cards[i].answer) {
        correct++;
      }
    }
    alert("You got " + correct + " out of " + Cards.length + " correct!");
  }

  
  return (
    <View style={styles.container}>
      <View>
        {
          <FlatList
            data={Cards}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <Text style={styles.cardText}>Q: {item.question}</Text>
                <TextInput
                  style={styles.cardText}
                  onChangeText={(val) => updateAnswers(index, val)}
                  Text={userAnswer[index]}
                  placeholder="Enter Answer Here"
                />
              </View>
            )}
          />
        }
      </View>
      <View style={styles.flashButtonContainer}>
        <Button title="Submit" onPress={() => checkAnswers()} />
      </View>
    </View>
  );
};

export default Test;
