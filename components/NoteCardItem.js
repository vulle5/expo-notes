import React from 'react';
import { View, Text } from 'react-native';

import { noteCardStyles as noteStyles, styles } from '../styles/appStyles';
import Xmark from '../assets/x-mark.svg';

const NoteCardItem = ({ item }) => {
  return (
    <View style={noteStyles.noteCard}>
      <Xmark width={30} height={30} style={noteStyles.deleteButton} />
      <Text style={styles.header2}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default NoteCardItem;
