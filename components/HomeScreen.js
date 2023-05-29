import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCountrySelect = (country) => {
    navigation.navigate('Table', { country: country });
  };

  return (
    <View>
      <Button title="USA" onPress={() => handleCountrySelect('USA')} />
      <Button title="India" onPress={() => handleCountrySelect('India')} />
    </View>
  );
};

export default HomeScreen;



// // screens/HomeScreen.js

// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const handleUSOption = () => {
//     navigation.navigate('Table', { country: 'USA' });
//   };

//   const handleIndiaOption = () => {
//     navigation.navigate('Table', { country: 'India' });
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="USA" onPress={handleUSOption} />
//       <Button title="India" onPress={handleIndiaOption} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;
