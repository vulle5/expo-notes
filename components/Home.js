import React from 'react';
import { View, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeArea();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <Text>Hello World!</Text>
    </View>
  );
};

export default Home;
