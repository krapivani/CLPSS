// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import TableScreen from './components/TableScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={HomeScreen} />
        <Stack.Screen name="CLPSS Members" component={TableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





