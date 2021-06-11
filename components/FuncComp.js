import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const FuncComp = () => {
  const [state, setState] = useState({
    name: 'Abir the idiot',
    age: '22',
    country: 'Bangladesh',
    data: 0,
  });
  return (
    <View>
      <Text>I am function</Text>
      <Text>{state.name}</Text>
      <Button
        onPress={() => {
          setState({name: 'I am Abir the Hero'});
        }}
        title="Click Me"
      />
    
    </View>
  );
};

export default FuncComp;
