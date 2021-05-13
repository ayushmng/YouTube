import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';
import {MiniCard} from './MiniCard';

export const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  return (
    <View style={cardStyles.root}>
      <View style={videoStyles.videoComponents}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <Text
        style={videoStyles.textStyles}
        numberOfLines={2}
        ellipsizeMode="tail">
        {title}
      </Text>
      <View style={{borderBottomWidth: 1}} />
    </View>
  );
};

const videoStyles = StyleSheet.create({
  videoComponents: {
    width: '100%',
    height: 200,
  },
  textStyles: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 50,
    margin: 8,
  },
});
