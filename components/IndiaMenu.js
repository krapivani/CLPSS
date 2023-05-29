// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TextInput, PermissionsAndroid, Platform } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import Geolocation from '@react-native-community/geolocation';

// const TableScreen = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const route = useRoute();
//   const { country } = route.params;

//   useEffect(() => {
//     fetchData();
//     requestLocationPermission();
//   }, []);

//   const fetchData = async () => {
//     try {
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

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app requires access to your location.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           getCurrentLocation();
//         } else {
//           console.log('Location permission denied');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       getCurrentLocation();
//     }
//   };

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log('Latitude:', latitude);
//         console.log('Longitude:', longitude);
//         // Call API or perform actions with latitude and longitude
//       },
//       (error) => {
//         console.error(error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const getCoordinatesByZipcode = async (zipcode) => {
//     try {
//       const apiKey = 'YOUR_API_KEY'; // Replace with your geocoding service API key
//       const response = await fetch(`https://api.geocoding_service.com/geocode?postal_code=${zipcode}&key=${apiKey}`);
//       const jsonData = await response.json();
//       if (jsonData.status === 'OK') {
//         const { lat, lng } = jsonData.results[0].geometry.location;
//         console.log('Latitude:', lat);
//         console.log('Longitude:', lng);
//         // Call API or perform actions with latitude and longitude
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSearch = (text) => {
//     setSearchText(text);
//     // Filter the data based on search text or zipcode
//     const filteredData = data.filter(
//       (item) =>
//         item.first_name.toLowerCase().includes(text.toLowerCase()) ||
//         item.last_name.toLowerCase().includes(text.toLowerCase()) ||
//         item.middle_name.toLowerCase().includes(text.toLowerCase()) ||
//         item.zip_code.toLowerCase().includes(text.toLowerCase())
//     );
//     setData(filteredData);

//     if (text.length === 5 && /^\d+$/.test(text)) {
//       // If the search text is a valid zipcode, get coordinates by zipcode
//       getCoordinatesByZipcode(text);
//     }
//   };

//   const renderRow = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.first_name}</Text>
//       <Text style={styles.cell}>{item.last_name}</Text>
//       <Text style={styles.cell}>{item.middle_name}</Text>
//       <Text style={styles.cell}>{item.zip_code}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search by name or zipcode"
//         value={searchText}
//         onChangeText={handleSearch}
//       />
//       <View style={styles.header}>
//         <Text style={styles.headerText}>First Name</Text>
//         <Text style={styles.headerText}>Middle Name</Text>
//         <Text style={styles.headerText}>Last Name</Text>
//         <Text style={styles.headerText}>Zip Code</Text>
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
//   searchInput: {
//     height: 40,
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 16,
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
