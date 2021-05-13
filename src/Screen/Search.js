import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cardStyles} from '../Components/Card';
import {MiniCard} from './MiniCard';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {color} from 'react-native-elements/dist/helpers';

export const Search = ({navigation}) => {
  const {colors} = useTheme();
  const colorBlack = '#212121';
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const cardData = useSelector((state) => {
    return state;
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}songs&type=video&key=AIzaSyCzlecrTzYhQ63w9-eHcJzdMq13gsH_-Rc`,
      // ``https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=AIzaSyB49j3q0IQQ1s43CW7OjvYpp50HLTDPFtY`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        dispatch({type: 'add', payload: data.items});
        // setCardData(data.items);
      });
  };

  return (
    <View style={{...cardStyles.root}}>
      <View
        style={{
          ...searchStyles.headerComponent,
          backgroundColor: colors.headerColor,
        }}>
        <AntDesign
          name="arrowleft"
          size={28}
          color={colors.iconColor}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          style={searchStyles.textInputStyles}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="send-sharp"
          size={28}
          color={colors.iconColor}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 8}} size="large" color="red" />
      ) : null}
      <FlatList
        data={cardData}
        renderItem={({item}) => {
          return (
            <MiniCard
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

export const searchStyles = StyleSheet.create({
  headerComponent: {
    flexDirection: 'row',
    padding: 4,
    alignItems: 'center',
    elevation: 8,
    justifyContent: 'space-around',
  },
  textInputStyles: {
    width: '75%',
    height: 40,
    backgroundColor: '#e6e6e6',
    padding: 8,
  },
});
