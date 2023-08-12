import React from 'react';
import SwitchComponent from './src/SwitchComponent';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 34,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginTop: 31,
        }}>
        React Native Switch
      </Text>
      <SwitchComponent value={true} title="Active State" />
      <SwitchComponent value={false} title="Inactive State" />
    </View>
  );
};

export default App;
