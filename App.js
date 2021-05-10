import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './Navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;