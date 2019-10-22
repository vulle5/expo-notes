import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from '../styles/appStyles';
import AppBar from './AppBar';
import NoteButton from './NoteButton';

const NewNote = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={{ ...styles.transparentContainer, ...styles.app }}>
      <TextInput
        onChange={({ nativeEvent }) => setTitle(nativeEvent.text)}
        style={{ height: 30, fontSize: 24 }}
        placeholder="Title"
        autoCorrect={false}
      >
        <Text style={styles.header2}>{title}</Text>
      </TextInput>
      <View style={{ marginVertical: 8 }}></View>
      <TextInput
        onChange={({ nativeEvent }) => setNote(nativeEvent.text)}
        style={{ fontSize: 16 }}
        multiline
        placeholder="Write note here..."
      >
        <Text style={styles.text}>{note}</Text>
      </TextInput>
      <NoteButton onPress={() => console.log('hello')} title="Add Note" />
    </View>
  );
};

NewNote.navigationOptions = () => ({
  headerTitle: () => <AppBar title="New Note" />
});

export default NewNote;
