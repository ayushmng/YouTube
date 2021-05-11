import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../src/Screen/Home';
import {Search} from '../src/Screen/Search';

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
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
