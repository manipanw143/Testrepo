import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Avatar Image Component
const AvatarImage = ({ src }) => {
  return <Image source={{ uri: src }} style={styles.avatar} />;
};

// Item Renderer for FlatList
const UserItem = ({ user }) => {
  const navigate = useNavigation();
  const { profilePicture, FirstName, FatherName, VyaaparType, State, Country, City, WorkingCity } = user;
  const firstImageUrl = profilePicture?.url || '/Person.png'; // Default fallback image

  return (
    <View style={styles.userItem}>
      <AvatarImage src={firstImageUrl} />
      <View style={styles.userDetails}>
        <Text style={styles.text}>{`Name: ${FirstName} ${FatherName}`}</Text>
        <Text style={styles.text}>{`Vyaapar Type: ${VyaaparType}`}</Text>
        <Text style={styles.text}>{`Working City: ${WorkingCity}`}</Text>
        <Text style={styles.text}>{`City: ${City}`}</Text>
        <Text style={styles.text}>{`Country: ${Country}, State: ${State}`}</Text>
      </View>
    </View>
  );
};

export default function UserDashboard() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users data (Simulating API call)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users'); // Replace with actual API endpoint
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <FlatList
      data={usersData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userDetails: {
    marginLeft: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  listContainer: {
    paddingTop: 10,
  },
});
