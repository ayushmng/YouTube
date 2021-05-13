import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';
import Headers from '../Components/Header';
import {MiniCard} from './MiniCard';

export const Library = () => {
  return (
    <View style={cardStyles.root}>
      <Headers />
      <Text>This is Library</Text>
    </View>
  );
};
