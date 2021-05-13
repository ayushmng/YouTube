import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {AppNavigation} from './Navigation/AppNavigation';
import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer} from './src/Reducers/reducer';
import {themeReducer} from './src/Reducers/themeReducer';

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
    textColor: 'white',
  },
};

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
    textColor: 'black',
  },
};

const rootReducer = combineReducers({
  cardData: reducer,
  darkMode: themeReducer,
});
const store = createStore(rootReducer);

export function Navigation() {
  let currentTheme = useSelector((state) => {
    return state.darkMode;
  });
  return (
    <Provider store={store}>
      <NavigationContainer theme={currentTheme ? darkTheme : defaultTheme}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
