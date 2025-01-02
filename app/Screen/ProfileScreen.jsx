import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { userService } from '../services/api';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    gotra: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem('userId');
      const response = await userService.getUserProfile(userId);
      if (response.data.length > 0) {
        setProfile(response.data[0].attributes);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const profileId = profile.id;
      await userService.updateUserProfile(profileId, profile);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={profile.firstName}
          onChangeText={(text) => setProfile({ ...profile, firstName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={profile.lastName}
          onChangeText={(text) => setProfile({ ...profile, lastName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Father's Name"
          value={profile.fatherName}
          onChangeText={(text) => setProfile({ ...profile, fatherName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Gotra"
          value={profile.gotra}
          onChangeText={(text) => setProfile({ ...profile, gotra: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={profile.phone}
          onChangeText={(text) => setProfile({ ...profile, phone: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={profile.address}
          onChangeText={(text) => setProfile({ ...profile, address: text })}
          multiline
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleUpdateProfile}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;