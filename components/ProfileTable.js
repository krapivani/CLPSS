import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileTable = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.row} key={item.id}>
          <Text style={styles.cell}>{item.first_name}</Text>
          <Text style={styles.cell}>{item.last_name}</Text>
          <Text style={styles.cell}>{item.email}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: 5,
    marginBottom: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default ProfileTable;
