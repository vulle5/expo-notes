import React from 'react';
import { View, Text } from 'react-native';

import { noteCardStyles as noteStyles, styles } from '../styles/appStyles';

const NoteCardItem = ({ item }) => {
  return (
    <View style={noteStyles.noteCard}>
      <Text style={styles.header2}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default NoteCardItem;
