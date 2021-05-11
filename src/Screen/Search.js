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

export const Search = () => {
  const colorBlack = '#212121';
  const [value, setValue] = useState('');
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=AIzaSyA43Hk_qEMD0DH-LEM4QuuPBApAK70l_jU`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.items);
      });

  return (
    <View style={{...cardStyles.root}}>
      <View style={searchStyles.headerComponent}>
        <AntDesign name="arrowleft" size={28} color={colorBlack} />
        <TextInput
          style={{
            width: '75%',
            height: 40,
            backgroundColor: '#e6e6e6',
            padding: 8,
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="send-sharp"
          size={28}
          color={colorBlack}
          onPress={() => fetchData()}
        />
      </View>
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
    backgroundColor: 'white',
  },
});
