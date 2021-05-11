import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';

export const MiniCard = (props) => {
  return (
    <View style={{flexDirection: 'row', margin: 12}}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`,
        }}
        style={{width: '40%', height: 100}}
      />
      <View style={{padding: 8}}>
        <Text
          style={{
            fontSize: 15,
            width: Dimensions.get('screen').width / 2,
          }}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {props.title}
          {/* This is dummy title text from Ayush, Such an amazing text from him. */}
        </Text>
        <Text style={{color: '#706e6e'}}>{props.channel}</Text>
      </View>
    </View>
  );
};
