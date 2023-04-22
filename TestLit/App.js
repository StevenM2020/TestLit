import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ViewCards from './pages/ViewCards';
import FlashCard from './pages/FlashCard';
import styles from './styles';


export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Sets" component={Home} />
      <Stack.Screen name="Cards" component={ViewCards} />
      <Stack.Screen name="FlashCard" component={FlashCard} />
    </Stack.Navigator>
    }</NavigationContainer>
  );
}

const Stack = createNativeStackNavigator(); 