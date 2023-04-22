//script:  home screen
//author:  Steven Motz
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

const home = ({ navigation }) => {
    const [listOfSets, setListOfSets] = useState([
        {key : '1', name: 'Addition', numCards: '27'},
        {key : '2', name: 'Subtraction', numCards: '6'},
        {key : '3', name: 'Multiplication', numCards: '4'},
        {key : '4', name: 'Division', numCards: '2'},
        {key : '5', name: 'Fractions', numCards: '7'},
        {key : '6', name: 'Decimals', numCards: '3'},
        {key : '7', name: 'Percents', numCards: '1'},
        {key : '8', name: 'Exponents', numCards: '2'},
        {key : '9', name: 'Square Roots', numCards: '1'},
        {key : '10', name: 'Cubes', numCards: '1'},
        {key : '11', name: 'Square Roots', numCards: '1'},
        {key : '12', name: 'Cubes', numCards: '1'},
        {key : '13', name: 'Square Roots2', numCards: '1'},
    ]);
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Create Set</Text>
      </View>
      <View>{
      <FlatList
      data={listOfSets}
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

export default home