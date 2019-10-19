import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import styles from '../styles/appStyles';

const Home = () => {
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
      <TouchableHighlight
        onPress={() => console.log('Hello')}
        style={styles.newNote}
      >
        <Text>New Note</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
