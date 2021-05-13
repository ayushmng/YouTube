import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';
import {useNavigation, useTheme} from '@react-navigation/native';
import {VideoPlayer} from '../Screen/VideoPlayer';
import {color} from 'react-native-elements/dist/helpers';

export const MiniCard = (props) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('VideoPlayer', {
          videoId: props.videoId,
          title: props.title,
        });
      }}>
      <View style={{flexDirection: 'row', margin: 12}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{width: '40%', height: 100}}
        />
        <View style={{padding: 8}}>
          <Text
            style={{
              fontSize: 15,
              width: Dimensions.get('screen').width / 2,
              color: colors.textColor,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {props.title}
            {/* This is dummy title text from Ayush, Such an amazing text from him. */}
          </Text>
          <Text style={{color: '#706e6e'}}>{props.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
