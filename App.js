 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import IndiaMenu from './components/IndiaMenu';
import USAMenu from './components/USMenu';

export default function App() {
  return (
     <View style={styles.appContainer}>
      <USAMenu/>
      <IndiaMenu/>
     </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex : 1,
    padding : 20,
    flexDirection : 'column',
    justifyContent : 'space-evenly',
  }

});
