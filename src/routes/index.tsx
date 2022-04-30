import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground} from 'react-native';
import HomeScreen from '../screens/HomeSscreen';
import InitialScreen from '../screens/InitialScreen/index';
import BackgroundImg from '../assets/background/Background.png';
import Tab from './bottomTab';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Home" component={Tab} />
    </Stack.Navigator>
  );
};

export default Routes;
