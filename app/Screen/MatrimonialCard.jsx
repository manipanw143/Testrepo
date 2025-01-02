// MatrimonialCard.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const MatrimonialCard = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('https://eksamaj.com/bader_preprod');
      setProfileData(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch profile data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066CC" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Card Container */}
      <View style={styles.cardContainer}>
        {/* Left Card - Summary Info */}
        <View style={styles.summaryCard}>
          <Image
            source={profileData?.attributes?.photo?.url 
              ? { uri: profileData.attributes.photo.url }
              : require('../images/default-avatar.png')}
            style={styles.profileImage}
          />
          <View style={styles.summaryInfo}>
            <Text style={styles.name}>{profileData?.attributes?.name}</Text>
            <Text style={styles.basicInfo}>
              {profileData?.attributes?.age} years old
            </Text>
          </View>
        </View>

        {/* Right Card - Detailed Info */}
        <View style={styles.detailsCard}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{profileData?.attributes?.fatherName}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>DOB:</Text>
            <Text style={styles.value}>{profileData?.attributes?.dob}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Gotra:</Text>
            <Text style={styles.value}>{profileData?.attributes?.gotra}</Text>
          </View>

          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.buttonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  summaryCard: {
    flex: 1,
    padding: 16,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  detailsCard: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  summaryInfo: {
    marginTop: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  basicInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  infoRow: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
  seeMoreButton: {
    backgroundColor: '#0066CC',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MatrimonialCard;