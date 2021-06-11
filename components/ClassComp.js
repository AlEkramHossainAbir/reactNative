import React, { Component } from 'react';
import {View,Text} from 'react-native'

class ClassComp extends Component {
    state = { name:'Abir',
            age:'22',
            country:'Bangladesh'            
}
    render() {
        return (
            <View>
                <Text>My Name is {this.state.name}</Text>
                <Text>My age is {this.state.age}</Text>

                <Text>My country is {this.state.country}</Text>



            </View>
        );
    }
}

export default ClassComp;