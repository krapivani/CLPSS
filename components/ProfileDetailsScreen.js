import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileDetailsScreen = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleNameClick = () => {
    setShowDetails(!showDetails)
  }
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.cell} onPress={handleNameClick}>
          {item.first_name} {item.middle_name} {item.last_name}
        </Text>
      </View>
      <View>
        {showDetails && (
          <View style={styles.detailsContainer}>
            {item.phone && (
              <Text style={styles.detailsText}>Phone: {item.phone}</Text>
            )}
            {item.email && (
              <Text style={styles.detailsText}>Email: {item.email}</Text>
            )}
            <Text style={styles.detailsText}>
              {item.address_line_1 && `Address: ${item.address_line_1}, `}
              {item.address_line_2 && `${item.address_line_2}, `}
              {item.city && `${item.city}, `}
              {item.state && `${item.state}, `}
              {item.zip_code && item.zip_code}
            </Text>
          </View>
        )}
      </View>
    </>
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
    borderBottomColor: '#cccccc'
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold'
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
    marginLeft: 2
  },
  detailsText: {
    fontSize: 14
  }
})
export default ProfileDetailsScreen
