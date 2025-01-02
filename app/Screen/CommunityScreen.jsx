import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const CommunityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Community Members</Text>
      <Text style={styles.description}>
        This is the Community Members screen where users can connect with other members.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default CommunityScreen;
