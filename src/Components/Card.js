import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {VideoPlayer} from '../Screen/VideoPlayer';
import {color} from 'react-native-elements/dist/helpers';

export const Card = (props) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const colorBlack = '#212121';
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('VideoPlayer', {
          videoId: props.videoId,
          title: props.title,
        });
      }}>
      <View style={{elevation: 4, marginBottom: 4}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={cardStyles.imageStyle}
        />
        <View style={cardStyles.cardContainer}>
          <Ionicons
            name="md-person-circle"
            size={40}
            color={colors.iconColor}
          />
          <View style={{marginLeft: 8, marginBottom: 8}}>
            <Text
              style={{...cardStyles.boldText, color: colors.textColor}}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={{color: '#706e6e'}}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const cardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  root: {
    flex: 1,
  },
  cardStyle: {
    margin: 4,
  },
  imageStyle: {
    width: '100%',
    height: 240,
  },
  textStyle: {
    fontSize: 16,
    margin: 4,
    marginLeft: 16,
  },
  boldText: {
    fontSize: 17,
    fontWeight: '200',
    fontFamily: 'bold',
    paddingRight: 12,
    marginRight: 12,
  },
});
