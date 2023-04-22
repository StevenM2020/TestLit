//script:  home screen
//author:  Steven Motz
//date:    4/22/2023
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home