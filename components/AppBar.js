import React from 'react';
import { Text } from 'react-native';

import { styles } from '../styles/appStyles';

const AppBar = ({ title = '' }) => {
  return (
    <Text style={{ ...styles.header2, ...{ fontWeight: 'bold' } }}>
      {title}
    </Text>
  );
};

export default AppBar;
