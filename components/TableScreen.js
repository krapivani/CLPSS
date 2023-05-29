import React, { useEffect, useState } from 'react'
import { View, StyleSheet,TextInput} from 'react-native'
import { useRoute } from '@react-navigation/native'
import ProfileDetailsScreen from './ProfileDetailsScreen'


const TableScreen = () => {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('');
  const route = useRoute()
  const { country } = route.params

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.60:8080/external/v1/GetUsers/' + country,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const jsonData = await response.json()
      const profileData = jsonData.profile
      setData(profileData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = (text) => {
    setSearchText(text);
    // Filter the data based on search text
    const filteredData = data.filter((item) =>
      item.first_name.toLowerCase().includes(text.toLowerCase()) ||
      item.last_name.toLowerCase().includes(text.toLowerCase()) ||
      item.middle_name.toLowerCase().includes(text.toLowerCase()) ||
      item.zip_code.toLowerCase().includes(text.toLowerCase()) ||
      item.city.toLowerCase().includes(text.toLowerCase()) ||
      item.state.toLowerCase().includes(text.toLowerCase()) ||
      item.address_line_1.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name or Address"
        value={searchText}
        onChangeText={handleSearch}
      />
      {data.map(item => (
        <ProfileDetailsScreen key={item.user_id} item={item} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignContent: 'center',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  cell: {
    flex: 1
  },
  detailsContainer: {
    paddingVertical: 8,
    marginLeft: 16
  },
  detailsText: {
    fontSize: 14
  },
  searchInput: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
})

export default TableScreen
