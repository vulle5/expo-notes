import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { styles, appStyles } from '../styles/appStyles';

const NoteButton = ({ onPress = () => {}, title = '' }) => {
  return (
    <TouchableHighlight onPress={onPress} style={appStyles.newNote}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

export default NoteButton;
