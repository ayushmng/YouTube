import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, View, Image, FlatList, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';
import Headers from '../Components/Header';
import {Card} from '../Components/Card';
import {useSelector} from 'react-redux';

const SmallCards = ({name}) => {
  return (
    <View style={exploreStyles.cardComponents}>
      <Text style={exploreStyles.textInputStyles}>{name}</Text>
    </View>
  );
};

export const Explore = () => {
  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={cardStyles.root}>
      <Headers />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <SmallCards name="Gaming" />
          <SmallCards name="Fashion" />
          <SmallCards name="Music" />
          <SmallCards name="News" />
        </View>
        <Text
          style={{
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 8,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            fontSize: 17,
            padding: 10,
          }}>
          Trending Videos
        </Text>
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
      </ScrollView>
    </View>
  );
};

export const exploreStyles = StyleSheet.create({
  cardComponents: {
    backgroundColor: 'red',
    height: 45,
    width: 180,
    borderRadius: 4,
    marginTop: 8,
    alignItems: 'center',
  },
  textInputStyles: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginTop: 8,
  },
});
