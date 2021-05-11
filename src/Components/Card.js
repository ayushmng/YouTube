import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Card = () => {
  const colorBlack = '#212121';
  return (
    <View style={{elevation: 4, marginBottom: 4}}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
        }}
        style={cardStyles.imageStyle}
      />
      <View style={cardStyles.cardContainer}>
        <Ionicons name="md-person-circle" size={40} color={colorBlack} />
        <View style={{marginLeft: 8, marginBottom: 8}}>
          <Text
            style={cardStyles.boldText}
            ellipsizeMode="tail"
            numberOfLines={2}>
            This is dummy title text from Ayush, Such an amazing text from him.
          </Text>
          <Text style={{color: '#706e6e'}}>This is sub-title</Text>
        </View>
      </View>
    </View>
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
