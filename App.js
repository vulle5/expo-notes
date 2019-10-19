import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home';

// import styles from './styles/appStyles';

// let notes = [
//   {
//     id: 1,
//     title: 'NHL',
//     text: 'Remember to watch habs game'
//   },
//   {
//     id: 2,
//     title: 'Home',
//     text: 'Take trash out'
//   },
//   {
//     id: 3,
//     title: 'Work',
//     text: 'Talk to Steve about the thing'
//   },
//   {
//     id: 4,
//     title: 'Work',
//     text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//     when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//     when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
//   }
// ];

const App = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
