import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../Components/Header';
import {Card} from '../Components/Card';
import {cardStyles} from '../Components/Card';

export const Home = () => {
  return (
    <View style={cardStyles.root}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};
