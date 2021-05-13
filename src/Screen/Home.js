import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../Components/Header';
import {Card} from '../Components/Card';
import {cardStyles} from '../Components/Card';
import {useSelector} from 'react-redux';

export const Home = () => {
  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={cardStyles.root}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};
