// import React, { Component } from "react";
// import { Button, Text, View } from "react-native";

// class App extends Component {
//   state = { isHungry: true };

//   render() {
//     return (
//       <>

//         <Text>
//           I am {this.props.name}, and I am
//           {this.state.isHungry ? " hungry" : " full"}!
//         </Text>
//         <Button
//           onPress={() => {
//             this.setState({ isHungry: false });
//           }}
//           disabled={!this.state.isHungry}
//           title={
//             this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
//           }
//         />

//       </>
//     );
//   }
// }
// export default App

import React, {Component} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import Show from './pages/Show';

class App extends Component {
  state = {ishungry: true};
  render() {
    return (
      <View style={{alignItems:'center', backgroundColor:'orange', height:"100%"}}>
        <View style={{alignItems:'flex-end',flexDirection:'row', backgroundColor:'teal'}}>
        <Text style={{fontSize:20}}>I am {this.state.ishungry ? 'Hungry' : 'Full'}</Text>
        <Button
          onPress={() => {
            this.setState({ishungry: false});
          }}
          disabled={!this.state.ishungry}
          title={this.state.ishungry ? 'Give me kachi' : 'No thank you'}
        />
        <Show />
      </View>
      <Text style={{fontSize:50}}>Your App is Running !</Text>
      <Button onPress={()=>{Alert.alert('Ore baba')}}
      color="#55e07a"
          title='Log in'
        />
      </View>

      // <View style={{flexDirection:'column'}}>
      //   <View style={{height:'33%', width:'100%',backgroundColor:"skyblue"}}></View>
      //   <View style={{height:'33%', width:'100%'}}></View>
      //   <View style={{height:'35%', width:'100%',backgroundColor:"skyblue"}}></View>
        
      // </View>
      
    );
  }
}

export default App;
