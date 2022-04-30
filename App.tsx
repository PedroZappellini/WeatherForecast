import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import {WeatherProvider} from './src/contexts/weather';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <WeatherProvider>
          <Routes />
        </WeatherProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
