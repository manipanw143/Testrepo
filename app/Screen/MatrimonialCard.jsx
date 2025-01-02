import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Individual Profile Card Component
const ProfileCard = ({ profile }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <View style={styles.cardContainer}>
      {/* Compact Header Section */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Icon name="user" size={32} color="#FFA500" />
        </View>
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.community}>{profile.community}</Text>
        </View>
      </View>

      {/* Basic Info (Always Visible) */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Icon name="home" size={20} color="#FFA500" />
          <View>
            <Text style={styles.label}>गोत्र / Gotra</Text>
            <Text style={styles.info}>{profile.gotra}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Icon name="phone" size={20} color="#FFA500" />
          <View>
            <Text style={styles.label}>फ़ोन / Phone</Text>
            <Text style={styles.info}>{profile.phone}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Icon name="user" size={20} color="#FFA500" />
          <View>
            <Text style={styles.label}>आयु / Age</Text>
            <Text style={styles.info}>{profile.age}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Icon name="briefcase" size={20} color="#FFA500" />
          <View>
            <Text style={styles.label}>व्यवसाय / Job</Text>
            <Text style={styles.info}>{profile.job}</Text>
          </View>
        </View>

        {/* Expand Button */}
        <TouchableOpacity
          onPress={() => setIsExpanded(!isExpanded)}
          style={styles.expandButton}
        >
          <Text style={styles.expandText}>
            {isExpanded ? 'कम जानकारी / Show Less' : 'अधिक जानकारी / View More'}
          </Text>
          <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="#FFA500" />
        </TouchableOpacity>
      </View>

      {/* Expanded Details */}
      {isExpanded && (
        <View style={styles.expandedInfo}>
          <View style={styles.expandedRow}>
            <Text style={styles.label}>पिता का नाम / Father's Name</Text>
            <Text style={styles.info}>{profile.fatherName}</Text>
          </View>

          <View style={styles.expandedRow}>
            <Text style={styles.label}>माता का नाम / Mother's Name</Text>
            <Text style={styles.info}>{profile.motherName}</Text>
          </View>

          <View style={styles.expandedRow}>
            <Text style={styles.label}>जन्म तिथि / Date of Birth</Text>
            <Text style={styles.info}>{profile.dateOfBirth}</Text>
          </View>

          <View style={styles.expandedRow}>
            <Icon name="map-pin" size={20} color="#FFA500" />
            <View>
              <Text style={styles.label}>पता / Address</Text>
              <Text style={styles.info}>{profile.location}</Text>
            </View>
          </View>

          <View style={styles.expandedRow}>
            <Icon name="mail" size={20} color="#FFA500" />
            <View>
              <Text style={styles.label}>ईमेल / Email</Text>
              <Text style={styles.info}>{profile.email}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

// Main Container Component with Scrollable List
const SamajProfileList = () => {
  // Sample data array - replace with your actual data
  const profiles = [
    {
      name: "राम कुमार शर्मा / Ram Kumar Sharma",
      age: "35 वर्ष / 35 years",
      dateOfBirth: "15 मई 1989 / 15 May 1989",
      fatherName: "श्री मोहन शर्मा / Shri Mohan Sharma",
      motherName: "श्रीमती सीता शर्मा / Smt. Sita Sharma",
      location: "दिल्ली, भारत / Delhi, India",
      job: "शिक्षक / Teacher",
      phone: "+91 98765 43210",
      email: "ram.sharma@email.com",
      gotra: "वशिष्ठ / Vashisht",
      community: "ब्राह्मण समाज / Brahmin Samaj"
    },
    // Add more profiles here
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>समाज सदस्य / Samaj Members</Text>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 16,
  },
  header: {
    backgroundColor: '#FFA500',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  community: {
    fontSize: 14,
    color: 'white',
  },
  infoContainer: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  info: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A5568',
  },
  expandButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  expandText: {
    fontSize: 14,
    color: '#FFA500',
    marginRight: 8,
  },
  expandedInfo: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingBottom: 16,
  },
  expandedRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2D3748',
  },
});

export default SamajProfileList;
