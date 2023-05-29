
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';



// const TableScreen = () => {
//   const [data, setData] = useState([]);
//   const route = useRoute();
//   const { country } = route.params;

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       //const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
//       const response = await fetch('http://192.168.1.60:8080/external/v1/GetUsers/' + country, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const jsonData = await response.json();
//       const profileData = jsonData.profile;
//       setData(profileData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.first_name}</Text>
//       <Text style={styles.cell}>{item.last_name}</Text>
//       <Text style={styles.cell}>{item.middle_name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>First Name</Text>
//         <Text style={styles.headerText}>Middle Name</Text>
//         <Text style={styles.headerText}>Last Name</Text>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderRow}
//         keyExtractor={(item) => item.user_id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     flexDirection: 'row',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   headerText: {
//     flex: 1,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   cell: {
//     flex: 1,
//   },
// });

// export default TableScreen;
