import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Config from 'react-native-config';

const ExampleContainer = () => {
  console.log(Config);
  
  return (
    <View>
      <Text>Hello</Text>
      <Text>{Config.ENVIRONMENT}</Text>
      <Text>{Config.API_URL}</Text>
    </View>
  )
}

export default ExampleContainer
