import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCountrySelect = (country) => {
    navigation.navigate('CLPSS Members', { country: country });
  };

const countries = ['Canada','India','UK','USA'];

  return (
    <View>
      {countries.map(item => (
       <Button title={item} onPress={() => handleCountrySelect(item)} /> 
      ))}
    </View>
  );
};

export default HomeScreen;

