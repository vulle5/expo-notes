import React from 'react';
import { View, Text } from 'react-native';

import AppBar from './AppBar';

const NewNote = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

NewNote.navigationOptions = () => ({
  headerTitle: () => <AppBar title="New Note" />
});

export default NewNote;
