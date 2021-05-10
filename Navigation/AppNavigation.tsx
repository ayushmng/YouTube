import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../src/Components/Screen/Home';

export const AppNavigation = () => {
  const Stack = createStackNavigator();

  const headerStyle = {
    title: 'Dashboard',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#0a70c9',
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Home} options={headerStyle} />
    </Stack.Navigator>
  );
};
