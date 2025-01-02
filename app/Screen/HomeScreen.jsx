import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const profileCards = [
    {
      title: 'Matrimonial',
      icon: 'heart-multiple',
      description: 'Find your life partner',
      color: ['#FF6B6B', '#FF8E8E'],
      navigationTarget:'MatrimonialCard'
    },
    {
      title: 'Community Members',
      icon: 'account-group',
      description: 'Connect with members',
      color: ['#4ECDC4', '#45B7AF'],
      navigationTarget: 'CommunityScreen'
    },
    {
      title: 'Business Network',
      icon: 'briefcase',
      description: 'Professional networking',
      color: ['#6C63FF', '#5A52D5'],
      navigationTarget: 'ProfileScreen'
    },
    {
      title: 'Temple Donation',
      icon: 'gift-outline',
      description: 'Support our temples',
      color: ['#FFB75E', '#ED8F03'],
      navigationTarget: 'DonationScreen'
    }
  ];

  const handleCardPress = (navigationTarget) => {
    if (navigationTarget) {
      navigation.navigate(navigationTarget);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4a90e2', '#357abd']} style={styles.header}>
        <Text style={styles.headerTitle}>Seervi Samaj</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Temples</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.templeCard}>
              <Image
                source={require('../images/temple3.png')}
                style={styles.templeImage}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.templeOverlay}
              >
                <Text style={styles.templeText}>Seervi Bader</Text>
                <Text style={styles.templeLocation}>Bilara, Rajasthan</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.templeCard}>
              <Image
                source={require('../images/temple2.png')}
                style={styles.templeImage}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.templeOverlay}
              >
                <Text style={styles.templeText}>Lingrajapuram Temple</Text>
                <Text style={styles.templeLocation}>Bangalore, Karnataka</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Services</Text>
          <View style={styles.profileCardsContainer}>
            {profileCards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={styles.profileCard}
                onPress={() => handleCardPress(card.navigationTarget)}
              >
                <LinearGradient
                  colors={card.color}
                  style={styles.cardGradient}
                >
                  <MaterialCommunityIcons name={card.icon} size={32} color="#fff" />
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventContainer}>
            {[
              { title: 'Annual Meeting', date: 'Dec 31, 2024', icon: 'people' },
              { title: 'Youth Festival', date: 'Jan 15, 2025', icon: 'musical-notes' }
            ].map((event, index) => (
              <TouchableOpacity key={index} style={styles.eventCard}>
                <LinearGradient
                  colors={['#FF8C00', '#FFA500']}
                  style={styles.eventGradient}
                >
                  <Ionicons name={event.icon} size={30} color="#fff" />
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <LinearGradient colors={['#fff', '#f8f8f8']} style={styles.bottomNav}>
        {['home', 'calendar', 'people', 'menu'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Ionicons name={icon} size={24} color={index === 0 ? '#4a90e2' : '#666'} />
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  templeCard: {
    width: width * 0.8,
    height: 200,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  templeImage: {
    width: '100%',
    height: '100%',
  },
  templeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  templeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  templeLocation: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  profileCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  profileCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardGradient: {
    padding: 16,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
    textAlign: 'center',
  },
  eventContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  eventCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  eventGradient: {
    padding: 16,
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  eventDate: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
