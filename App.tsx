import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          options={{title: 'Screen 1', headerTransparent: true}}
          component={Screen1}
        />
        <Stack.Screen
          name="Screen2"
          options={{title: 'Screen 2', headerTransparent: true}}
          component={Screen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screen1 = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Screen 1 </Text>
      <Button
        title={'Go to screen 2'}
        onPress={() => {
          navigation.push('Screen2');
        }}
      />
    </View>
  );
};

const Screen2 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Screen 2 </Text>
    </View>
  );
}
