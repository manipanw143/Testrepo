import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Baylo Tor</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Temple Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Temple</Text>
          <View style={styles.templeContainer}>
            <View style={styles.templeBox}>
              <Ionicons name="business-outline" size={40} color="#666" />
              <Text style={styles.templeText}>Temple 1</Text>
            </View>
            <View style={styles.templeBox}>
              <Ionicons name="business-outline" size={40} color="#666" />
              <Text style={styles.templeText}>Temple 2</Text>
            </View>
          </View>
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={60} color="#666" />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileDetails}>Member since 2024</Text>
            </View>
          </View>
        </View>

        {/* Festival and Event Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Festival and Event</Text>
          <View style={styles.eventContainer}>
            <TouchableOpacity style={styles.eventCard}>
              <Ionicons name="calendar-outline" size={30} color="#666" />
              <Text style={styles.eventTitle}>New Year Festival</Text>
              <Text style={styles.eventDate}>Dec 31, 2024</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventCard}>
              <Ionicons name="calendar-outline" size={30} color="#666" />
              <Text style={styles.eventTitle}>Spring Ceremony</Text>
              <Text style={styles.eventDate}>Jan 15, 2025</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  templeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  templeBox: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  templeText: {
    marginTop: 8,
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileDetails: {
    color: '#666',
    marginTop: 4,
  },
  eventContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  eventCard: {
    width: '50%',
    padding: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  eventDate: {
    color: '#666',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;