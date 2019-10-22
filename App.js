import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useScreens } from 'react-native-screens';

import Home from './components/Home';
import NewNote from './components/NewNote';
import AppBar from './components/AppBar';

// This optimizes screen's memory usage
// by using native navigation components
useScreens();

const RootStack = createStackNavigator(
  // Screens
  {
    Home,
    NewNote
  },
  // Options
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTitle: () => <AppBar />
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
