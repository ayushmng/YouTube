import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../src/Screen/Home';
import {Subscribe} from '../src/Screen/Subscribe';
import {Explore} from '../src/Screen/Explore';
import {Search} from '../src/Screen/Search';
import {Library} from '../src/Screen/Library';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {VideoPlayer} from '../src/Screen/VideoPlayer';
import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-elements/dist/helpers';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  const headerStyle = {
    title: 'Dashboard',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#0a70c9',
    },
  };

  const TabHome = () => {
    const {colors} = useTheme();
    return (
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Explore') {
              iconName = 'explore';
            } else if (route.name === 'Subscribe') {
              iconName = 'subscriptions';
            } else if (route.name === 'Library') {
              iconName = 'video-library';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.tabIcon,
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Explore" component={Explore} />
        <Tabs.Screen name="Subscribe" component={Subscribe} />
        <Tabs.Screen name="Library" component={Library} />
      </Tabs.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={TabHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
