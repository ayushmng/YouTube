import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {search} from '../Screen/Search';

export default function Header() {
  const colorBlack = '#212121';
  const navigation = useNavigation();

  return (
    <View style={headerStyles.headerComponents}>
      <View style={headerStyles.youTubeIconStyle}>
        <Entypo name="youtube" size={36} color="red" />
        <Text style={headerStyles.textStyle}>YouTube</Text>
      </View>
      <View style={headerStyles.headerIconStyle}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colorBlack}
          style={{paddingRight: 8}}
        />
        <Feather
          name="search"
          size={24}
          color={colorBlack}
          style={{paddingRight: 8}}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <Ionicons name="md-person-circle" size={28} color={colorBlack} />
      </View>
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  youTubeIconStyle: {
    flexDirection: 'row',
    margin: 4,
    alignItems: 'flex-end',
    paddingLeft: 8,
  },
  headerComponents: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 6,
    alignItems: 'center',
  },
  headerIconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
  },
  root: {
    flex: 1,
  },
  textStyle: {
    padding: 8,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
