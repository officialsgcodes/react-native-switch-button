import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-switch';

const SwitchComponent = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 34,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginVertical: 31,
        }}>
        {props.title}
      </Text>
      <Switch
        value={value}
        onValueChange={() => setValue(!value)}
        // disabled={true}
        // barHeight={40}
        // renderActiveText={true}
        // renderInActiveText={false}
        activeText="Yes"
        inActiveText='No'
        circleSize={40}
        backgroundActive='blue'
        backgroundInactive='red'
        renderInsideCircle={() => <Text>S.G.</Text>}
        // circleBorderActiveColor='green'
        // circleBorderInactiveColor='yellow'
        // circleBorderWidth={1}
        switchBorderRadius={25}
        // switchWidthMultiplier={2}
      />
    </View>
  );
};

export default SwitchComponent;
