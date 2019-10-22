import React from 'react';
import { View, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { styles } from '../styles/appStyles';
import NoteCardList from './NoteCardList';
import NoteButton from './NoteButton';

let notes = [
  {
    id: '1',
    title: 'NHL',
    text: 'Remember to watch habs game'
  },
  {
    id: '2',
    title: 'Home',
    text: 'Take trash out'
  },
  {
    id: '3',
    title: 'Work',
    text: 'Talk to Steve about the thing'
  },
  {
    id: '4',
    title: 'Work',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
];

const Home = ({ navigation }) => {
  const insets = useSafeArea();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.app
      }}
    >
      <Text style={styles.header}>Notes</Text>
      <NoteCardList notes={notes} />
      <NoteButton
        onPress={() => navigation.navigate('NewNote')}
        title="New Note"
      />
    </View>
  );
};

export default Home;
