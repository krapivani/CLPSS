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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Table" component={TableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





//  import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Button} from 'react-native';
// import IndiaMenu from './components/IndiaMenu';
// import USAMenu from './components/USMenu';

// export default function App() {
//   return (
//      <View style={styles.appContainer}>
//       <Button
//         onPress={USAMenu}
//         title="US"
//         color="#841584"/>
//       <IndiaMenu/>
//      </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer : {
//     flex : 1,
//     padding : 20,
//     flexDirection : 'column',
//     justifyContent : 'space-evenly',
//   }

// });
