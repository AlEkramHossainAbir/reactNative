import React from 'react';
import {View,Text} from 'react-native'
import ClassComp from '../components/ClassComp';
import FuncComp from '../components/FuncComp';
import Comp2 from '../components/Comp2';

function Show(props) {
    return (
        <View >
            <Text>Class Component</Text>
            <ClassComp />
            <FuncComp />
            <Comp2 />
        </View>
    );
}

export default Show;