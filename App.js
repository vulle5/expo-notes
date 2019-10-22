import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/Home';
import NewNote from './components/NewNote';

const RootStack = createStackNavigator(
  {
    Home: Home,
    NewNote: NewNote
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTransparent: true
    }
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};

export default App;
