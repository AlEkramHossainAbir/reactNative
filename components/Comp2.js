import React, { useState } from 'react';
import {View,Text,Button} from 'react-native'

function Comp2() {
    const [state,setState] = useState(


        {


            data:0
        }
    )
  return (
    <View>
      <Text>NUmber : {state.data}</Text>

      <Button
        onPress={() => {
          setState({data: 'You Idiot'});
        }}
        title="The ultimate value changer"
      />
    </View>
  );
}

export default Comp2;
